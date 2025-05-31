import express, {Request, Response} from 'express';
import { PrismaClient } from '../generated/prisma/client';
import { verifyJwt } from '../middleware/jwt';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { AuthenticatedRequest } from '../types';
import crypto from 'crypto';

const router = express.Router();
const prisma = new PrismaClient();

const sesClient = new SESClient({ 
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});


// アルバム一覧
router.get('/', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  try {
    const albums = await prisma.album.findMany({
      where: { 
        owner_user_id: userId, 
        is_deleted: false,
        NOT: {
          albumMembers: {
            some: {
              user_id: {
                not: userId,
              },
            },
          },
        },
      },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        _count: {
          select: {
            photos: { where: { is_deleted: false } },
            sub_albums: { where: { is_deleted: false } },
          },
        },
      },
    });

    // 統一フォーマットに変換
    const formattedAlbums = albums.map(album => ({
      ...album,
      userPermission: 'owner' as const,
      isShared: false,
      sharedWith: [],
    }));

    res.json(formattedAlbums);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
});

// アルバム作成
router.post('/', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const { name, parent_album_id } = req.body;

  if (!name) return res.status(400).json({ error: 'Album name is required' });

  try {
    const album = await prisma.album.create({
      data: {
        name,
        parent_album_id: parent_album_id || null,
        owner_user_id: userId,
      },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        _count: {
          select: {
            photos: { where: { is_deleted: false } },
            sub_albums: { where: { is_deleted: false } },
          },
        },
      },
    });

    // 統一フォーマットで返却
    const formattedAlbum = {
      ...album,
      userPermission: 'owner' as const,
      isShared: false,
      sharedWith: [],
    };

    res.status(201).json(formattedAlbum);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create album' });
  }
});

// アルバム削除（再帰的）
router.delete('/:id', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const albumId = req.params.id;

  try {
    const album = await prisma.album.findUnique({
      where: { id: albumId },
    });

    if (!album || album.owner_user_id !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await softDeleteAlbumAndChildren(albumId);
    res.json({ message: 'Album and its sub-albums deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete album' });
  }
});


export async function softDeleteAlbumAndChildren(albumId: string): Promise<void> {
  await prisma.album.update({
    where: { id: albumId },
    data: { is_deleted: true },
  });

  const children = await prisma.album.findMany({
    where: {
      parent_album_id: albumId,
      is_deleted: false,
    },
  });

  for (const child of children) {
    await softDeleteAlbumAndChildren(child.id);
  }
}

// アルバム名変更
router.put('/:id/rename', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const albumId = req.params.id;
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: 'Album name is required' });

  try {
    const album = await prisma.album.findUnique({ where: { id: albumId, is_deleted: false } });
    if (!album) return res.status(404).json({ error: 'Album not found.' });

    // 権限チェック
    const isOwner = album.owner_user_id === userId;
    let canEdit = isOwner;
    if (!isOwner) {
        const member = await prisma.albumMember.findUnique({
            where: { album_id_user_id: { album_id: albumId, user_id: userId }}
        });
        canEdit = member?.role === 'write' || member?.role === 'owner';
    }
    if (!canEdit) return res.status(403).json({ error: 'Forbidden: You do not have permission to rename this album.' });

    const updatedAlbum = await prisma.album.update({
      where: { id: albumId },
      data: { name },
    });
    res.json(updatedAlbum);
  } catch (err) {
    res.status(500).json({ error: 'Failed to rename album' });
  }
});

// アルバム親変更
router.put('/:id/move', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  const albumIdToMove = req.params.id;
  const { parentAlbumId: newParentAlbumId } = req.body;
  try {
    const albumToMove = await prisma.album.findFirst({
      where: { id: albumIdToMove, owner_user_id: userId, is_deleted: false }, // 移動はオーナーのみ
    });
    if (!albumToMove) {
      return res.status(403).json({ error: 'Album to move not found or not owned by you.' });
    }
    if (albumIdToMove === newParentAlbumId) {
      return res.status(400).json({ error: 'Cannot move album into itself.' });
    }
    if (newParentAlbumId) { // ルート以外への移動
      const targetParentAlbum = await prisma.album.findFirst({
        where: { id: newParentAlbumId, owner_user_id: userId, is_deleted: false }, // 移動先の親もオーナーであること
      });
      if (!targetParentAlbum) {
        return res.status(403).json({ error: 'Target parent album not found or not owned by you.' });
      }
      let current = targetParentAlbum;
      while (current.parent_album_id) {
        if (current.parent_album_id === albumIdToMove) {
          return res.status(400).json({ error: 'Circular dependency detected.'});
        }
        const parent = await prisma.album.findUnique({where: {id: current.parent_album_id}});
        if (!parent) break;
        current = parent;
      }
    }
    const updatedAlbum = await prisma.album.update({
      where: { id: albumIdToMove },
      data: { parent_album_id: newParentAlbumId || null },
    });
    res.json(updatedAlbum);
  } catch (err) {
    console.error('Failed to move album:', err);
    res.status(500).json({ error: 'Failed to move album' });
  }
});

router.post('/share', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const inviterId = req.user!.sub;
  const inviterEmail = req.user!.email;
  // ロールは 'read' または 'write' のみ
  const { albumId, email: invitedEmail, role } = req.body as { albumId: string, email: string, role: 'read' | 'write' };

  if (!albumId || !invitedEmail || !role) {
    return res.status(400).json({ error: 'albumId, email, and role are required' });
  }
  if (!['read', 'write'].includes(role)) { // 'owner' ロールは招待では付与しない
    return res.status(400).json({ error: 'Invalid role. Must be "read" or "write".' });
  }

  try {
    const album = await prisma.album.findUnique({
      where: { id: albumId },
      include: { owner: true },
    });

    if (!album || album.is_deleted) {
      return res.status(404).json({ error: 'Album not found or has been deleted.' });
    }
    // アルバムのプライマリーオーナー、または 'owner' ロールを持つ AlbumMember も招待可能とするか検討
    // ここでは、プライマリーオーナー (album.owner_user_id) のみが招待可能とする
    if (album.owner_user_id !== inviterId) {
        // もし共同オーナーも招待できるようにするなら、AlbumMemberテーブルでinviterIdがownerロールか確認
        const inviterMembership = await prisma.albumMember.findUnique({
            where: { album_id_user_id: { album_id: albumId, user_id: inviterId }}
        });
        if (!inviterMembership || inviterMembership.role !== 'owner') {
            return res.status(403).json({ error: 'Forbidden: Only the album owner or a user with owner role can share this album.' });
        }
    }

    if (album.owner.email === invitedEmail) { // プライマリーオーナー自身への招待は不可
      return res.status(400).json({ error: 'Cannot share album with the primary owner themselves.' });
    }

    const invitedUser = await prisma.user.findUnique({
      where: { email: invitedEmail },
    });

    if (invitedUser && invitedUser.id === album.owner_user_id) { // プライマリーオーナーのユーザーIDと一致する場合
        return res.status(400).json({ error: 'Cannot share album with the primary owner themselves.' });
    }


    if (!invitedUser) {
      console.log(`Invited user ${invitedEmail} not found in DB. Sending invitation without pre-existing user record.`);
    } else {
      const existingMember = await prisma.albumMember.findUnique({
        where: { album_id_user_id: { album_id: albumId, user_id: invitedUser.id } },
      });
      if (existingMember) {
        return res.status(409).json({ error: `User ${invitedEmail} is already a member of this album with role: ${existingMember.role}.` });
      }
    }
    
    const existingPendingShare = await prisma.albumShare.findFirst({
        where: { album_id: albumId, invited_email: invitedEmail, status: 'pending' }
    });
    if(existingPendingShare) {
        return res.status(409).json({ error: `An active invitation already exists for ${invitedEmail} for this album.` });
    }

    const invitationToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); 

    const newShare = await prisma.albumShare.create({
      data: {
        album_id: albumId,
        invited_by_user_id: inviterId,
        invited_email: invitedEmail,
        role,
        invitation_token: invitationToken,
        expires_at: expiresAt,
        status: 'pending',
      },
    });

    let roleDescription = role === 'read' ? '閲覧のみ' : '編集可能';

    const invitationUrl = `${process.env.FRONTEND_URL}/accept-invitation?token=${invitationToken}`;
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL!,
      Destination: { ToAddresses: [invitedEmail] },
      Message: {
        Subject: { Data: `アルバム「${album.name}」へのご招待`, Charset: 'UTF-8' },
        Body: {
          Html: {
            Data: `<h2>アルバム共有のご招待</h2>
                   <p>${album.owner.name || inviterEmail || 'アルバムオーナー'}さんからアルバム「${album.name}」へのご招待です。</p>
                   <p>役割: ${roleDescription}</p>
                   <p><a href="${invitationUrl}">こちらをクリックして招待を承諾してください</a></p>
                   <p>このリンクは24時間有効です。</p>
                   <p>心当たりのない場合は、このメールを無視してください。</p>`,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `${album.owner.name || inviterEmail || 'アルバムオーナー'}さんからアルバム「${album.name}」へのご招待です。\n\n役割: ${roleDescription}\n\n以下のリンクから招待を承諾してください (24時間有効):\n${invitationUrl}\n\n心当たりのない場合は、このメールを無視してください。`,
            Charset: 'UTF-8',
          }
        },
      },
    };

    try {
      await sesClient.send(new SendEmailCommand(emailParams));
      res.status(201).json({ message: 'Invitation sent successfully.', shareId: newShare.id });
    } catch (emailError) {
      console.error('Failed to send invitation email:', emailError);
      res.status(201).json({ message: 'Invitation created, but failed to send email. Please check server logs.', shareId: newShare.id });
    }
  } catch (err) {
    console.error('Error sharing album:', err);
    res.status(500).json({ error: 'Failed to share album' });
  }
});

router.post('/accept', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const acceptingUserId = req.user!.sub;
  const acceptingUserEmail = req.user!.email;
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Invitation token is required.' });
  }

  try {
    const share = await prisma.albumShare.findUnique({
      where: { invitation_token: token },
      include: { album: true }
    });

    if (!share) {
      return res.status(404).json({ error: 'Invitation token not found or invalid.' });
    }
    if (share.status !== 'pending') {
      return res.status(400).json({ error: `This invitation is already ${share.status}.` });
    }
    if (new Date() > new Date(share.expires_at)) {
      await prisma.albumShare.update({ where: { id: share.id }, data: { status: 'expired' } });
      return res.status(400).json({ error: 'Invitation has expired.' });
    }
    if (acceptingUserEmail && share.invited_email.toLowerCase() !== acceptingUserEmail.toLowerCase()) {
        return res.status(403).json({ error: 'This invitation is not intended for your email address.' });
    }
    // 承諾者がアルバムのプライマリーオーナー自身でないか確認
    if (share.album.owner_user_id === acceptingUserId) {
        // プライマリーオーナーが自分自身への招待を承諾しようとした場合 (通常は招待作成時にブロックされるはず)
        await prisma.albumShare.update({ where: { id: share.id }, data: { status: 'revoked' } });
        return res.status(400).json({ message: 'Primary album owner cannot accept an invitation to their own album through this flow.' });
    }

    const result = await prisma.$transaction(async (txPrisma) => {
      const albumMember = await txPrisma.albumMember.upsert({
        where: { album_id_user_id: { album_id: share.album_id, user_id: acceptingUserId } },
        update: { role: share.role },
        create: { album_id: share.album_id, user_id: acceptingUserId, role: share.role },
      });
      const updatedShare = await txPrisma.albumShare.update({
        where: { id: share.id },
        data: { status: 'accepted', invited_user_id: acceptingUserId },
      });
      return { albumMember, updatedShare };
    });

    res.status(200).json({
      message: 'Invitation accepted successfully.',
      albumId: result.albumMember.album_id,
      role: result.albumMember.role,
    });
  } catch (error: any) {
    console.error('Error accepting invitation:', error);
    if (error.code === 'P2002') {
        return res.status(409).json({ message: 'User is already a member of this album or a conflict occurred.' });
    }
    res.status(500).json({ error: 'Failed to accept invitation.' });
  }
});

router.get('/shared', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.sub;
  try {
    // 1. 自分がメンバーだがオーナーではないアルバム
    const sharedWithMeAlbums = await prisma.albumMember.findMany({
      where: {
        user_id: userId,
        album: {
          is_deleted: false,
          NOT: { owner_user_id: userId },
        },
      },
      include: {
        album: {
          include: {
            owner: { select: { id: true, name: true, email: true } },
            _count: {
              select: {
                photos: { where: { is_deleted: false } },
                sub_albums: { where: { is_deleted: false } },
              },
            },
          },
        },
      },
    });

    // 2. 自分がオーナーで、かつ誰か他のユーザーと共有しているアルバム
    const ownedAndSharedAlbums = await prisma.album.findMany({
      where: {
        owner_user_id: userId,
        is_deleted: false,
        albumMembers: {
          some: {
            user_id: {
              not: userId,
            },
          },
        },
      },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        _count: {
          select: {
            photos: { where: { is_deleted: false } },
            sub_albums: { where: { is_deleted: false } },
          },
        },
        albumMembers: {
          where: { user_id: userId }
        }
      },
    });

    // 統一フォーマットに変換
    const resultAlbums = [];

    for (const membership of sharedWithMeAlbums) {
      resultAlbums.push({
        ...membership.album,
        userPermission: membership.role as 'owner' | 'write' | 'read',
        isShared: true,
        role: membership.role, // 後方互換性のため保持
      });
    }

    for (const album of ownedAndSharedAlbums) {
      if (!resultAlbums.some(a => a.id === album.id)) {
        const ownerRole = album.albumMembers.find(m => m.user_id === userId)?.role || 'owner';
        resultAlbums.push({
          ...album,
          userPermission: ownerRole as 'owner' | 'write' | 'read',
          isShared: true,
          role: ownerRole, // 後方互換性のため保持
        });
      }
    }
    
    resultAlbums.sort((a, b) => a.name.localeCompare(b.name));

    res.json(resultAlbums);
  } catch (err) {
    console.error('Error fetching shared albums:', err);
    res.status(500).json({ error: 'Failed to fetch shared albums' });
  }
});


// GET /api/albums/:albumId/members - 特定のアルバムの共有メンバー一覧を取得
router.get('/:albumId/members', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const currentUserId = req.user!.sub;
  const { albumId } = req.params;

  try {
    const album = await prisma.album.findUnique({
      where: { id: albumId, is_deleted: false },
    });
    if (!album) {
      return res.status(404).json({ error: 'Album not found or has been deleted.' });
    }

    // アルバムのオーナーか、メンバーであるか確認
    const isOwner = album.owner_user_id === currentUserId;
    const isMember = await prisma.albumMember.findUnique({
      where: { album_id_user_id: { album_id: albumId, user_id: currentUserId } },
    });

    if (!isOwner && !isMember) {
      return res.status(403).json({ error: 'Forbidden: You do not have access to view members of this album.' });
    }

    const members = await prisma.albumMember.findMany({
      where: { album_id: albumId },
      include: {
        user: { select: { id: true, name: true, email: true } }, // 共有相手のユーザー情報
      },
      orderBy: { user: { email: 'asc' } },
    });

    // オーナー情報を追加（AlbumMemberにオーナー自身が含まれていない場合のため）
    const ownerInfo = await prisma.user.findUnique({
        where: { id: album.owner_user_id },
        select: { id: true, name: true, email: true }
    });

    const memberList = members.map(m => ({
      userId: m.user.id,
      name: m.user.name,
      email: m.user.email,
      role: m.role,
      isOwner: m.user.id === album.owner_user_id
    }));

    // AlbumMemberにオーナーが含まれていない場合、リストの先頭に追加する
    if (ownerInfo && !memberList.some(m => m.userId === ownerInfo.id)) {
        memberList.unshift({
            userId: ownerInfo.id,
            name: ownerInfo.name,
            email: ownerInfo.email,
            role: 'owner', // オーナーのロール
            isOwner: true
        });
    }


    res.json(memberList);
  } catch (err) {
    console.error('Error fetching album members:', err);
    res.status(500).json({ error: 'Failed to fetch album members' });
  }
});

// DELETE /api/albums/:albumId/members/:userIdToRemove - 特定ユーザーの共有を解除
router.delete('/:albumId/members/:userIdToRemove', verifyJwt, async (req: AuthenticatedRequest, res: Response) => {
  const currentUserId = req.user!.sub; // 操作を実行するユーザー
  const { albumId, userIdToRemove } = req.params;

  try {
    const album = await prisma.album.findUnique({
      where: { id: albumId, is_deleted: false },
    });
    if (!album) {
      return res.status(404).json({ error: 'Album not found or has been deleted.' });
    }

    // 操作者がアルバムオーナーであるか確認
    if (album.owner_user_id !== currentUserId) {
      return res.status(403).json({ error: 'Forbidden: Only the album owner can remove members.' });
    }

    // オーナー自身をこの方法で削除しようとしていないか確認
    if (album.owner_user_id === userIdToRemove) {
      return res.status(400).json({ error: 'Album owner cannot be removed using this method. To transfer ownership or delete album, use respective features.' });
    }

    // 削除対象のメンバーが存在するか確認
    const memberToRemove = await prisma.albumMember.findUnique({
        where: { album_id_user_id: { album_id: albumId, user_id: userIdToRemove } }
    });

    if (!memberToRemove) {
        return res.status(404).json({ error: 'User is not a member of this album or already removed.'});
    }


    // トランザクションで処理
    await prisma.$transaction(async (txPrisma) => {
      // AlbumMember から削除
      await txPrisma.albumMember.delete({
        where: { album_id_user_id: { album_id: albumId, user_id: userIdToRemove } },
      });

      // 関連する有効な AlbumShare (招待) があれば 'revoked' に更新
      // (対象ユーザーのメールアドレスを取得する必要がある)
      const userToRemove = await txPrisma.user.findUnique({ where: {id: userIdToRemove }});
      if (userToRemove) {
        await txPrisma.albumShare.updateMany({
          where: {
            album_id: albumId,
            invited_email: userToRemove.email, // 削除対象ユーザーのメールアドレス
            status: 'pending', // 保留中の招待のみ
          },
          data: { status: 'revoked' },
        });
      }
    });

    res.json({ message: `User ${userIdToRemove} has been removed from album ${albumId}.` });
  } catch (err) {
    console.error('Error removing album member:', err);
    res.status(500).json({ error: 'Failed to remove album member' });
  }
});


export default router;



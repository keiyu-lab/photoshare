import type { AlbumType } from "@/types";
import { useState } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { ChevronDown, ChevronRight, Folder, Pencil, PlusCircle, Trash2, Image, Share, Eye } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";

export const buildAlbumTree = (albums: AlbumType[]): AlbumType[] => {
  const map = new Map<string, AlbumType>();
  const roots: AlbumType[] = [];
  if(albums.length < 4)
    console.log(albums)
  // Map に各アルバムを登録
  for (const album of albums) {
    map.set(album.id, { ...album, children: [] });
  }
  if(albums.length < 4)
    console.log(map)
  // 親に children を割り当てる
  for (const album of albums) {
    const node = map.get(album.id)!;
    if (album.parent_album_id) {
      const parent = map.get(album.parent_album_id);
      if (parent) {
        parent.children?.push(node);
      } else {
        roots.push(node); // 少しおかしいかもしれない。共有アルバムが元のparent_album_idを持ったままこちらにくるのでこうしないとプッシュできない
      }
    } else {
      roots.push(node);
    }
  }
  
  return roots;
}

export const findAlbumById = (tree: AlbumType[], id: string): AlbumType | null  =>{
  for (const album of tree) {
    if (album.id === id) {
      return album;
    }
    if (album.children) {
      const found = findAlbumById(album.children, id);
      if (found) return found;
    }
  }
  return null;
}

export const flattenAlbums = (tree: AlbumType[]): AlbumType[] => {
  const result: AlbumType[] = [];

  const traverse = (node: AlbumType) => {
    result.push({ ...node, children: undefined });
    node.children?.forEach(traverse);
  };

  tree.forEach(traverse);
  return result;
};

export const normailzeRowAlbum = (albumList: any) => {
  const normalizedAlbums = albumList.map((album: any) => ({
    id: album.id,
    name: album.name,
    parent_album_id: album.parent_album_id || album.parentAlbumId || null,
    owner_user_id: album.owner_user_id || album.ownerUserId,
    children: album.children || [],
    userPermission: album.userPermission || album.role || 'read',
    isShared: album.isShared ?? (album.role !== 'owner'),
    sharedWith: album.sharedWith || [],
    owner: album.owner,
    role: album.role, // 後方互換性
    _count: album._count,
    created_at: album.created_at,
    updated_at: album.updated_at,
  }));
  return normalizedAlbums;
};

export const AlbumTreeNode = ({ 
  album, 
  level = 0, 
  onSelectAlbum,
  onAddAlbum,
  onAddPhoto,
  onRenameAlbum,
  onDeleteAlbum,
  onShareAlbum,
  onMoveAlbum,
  onMovePhoto,
  isDragging = false,
  isDropTarget = false,
  isSharedAlbum = false,        
  userPermission = 'owner'      
}: { 
  album: AlbumType;
  level?: number;
  onSelectAlbum: (id: string) => void;
  onAddAlbum?: (parentId: string) => void;
  onAddPhoto?: (albumId: string) => void;
  onRenameAlbum?: (albumId: string, newName: string) => Promise<boolean>; 
  onDeleteAlbum?: (albumId: string) => void;
  onShareAlbum?: (albumId: string) => void;
  onMoveAlbum?: (albumId: string, targetAlbumId: string) => void;
  onMovePhoto?: (photoId: string, targetAlbumId: string) => void;
  isDragging?: boolean;
  isDropTarget?: boolean;
  isSharedAlbum?: boolean;      // 新規追加
  userPermission?: 'owner' | 'write' | 'read';  // 新規追加
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRenaming, setIsRenaming] = useState(false);
  const [editingName, setEditingName] = useState(album.name);
  const hasChildren = album.children && album.children.length > 0;

  const canWrite = userPermission === 'owner' || userPermission === 'write';
  const canAdmin = userPermission === 'owner';

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  
  const handleAddAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canWrite) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onAddAlbum) onAddAlbum(album.id);
  };
  
  const handleAddPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canWrite) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onAddPhoto) onAddPhoto(album.id);
  };

  const handleRenameAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    setIsRenaming(true);
    setEditingName(album.name);
  };

  const handleDeleteAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onDeleteAlbum) onDeleteAlbum(album.id);
  };

  const handleShareAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onShareAlbum) onShareAlbum(album.id);
  };

  const handleConfirmRename = async () => {
    if (editingName.trim() === album.name) {
      setIsRenaming(false);
      return;
    }

    if (onRenameAlbum) {
      const success = await onRenameAlbum(album.id, editingName.trim());
      if (success) {
        setIsRenaming(false);
      } else {
        setEditingName(album.name); // 失敗時は元の名前に戻す
      }
    }
  };

  const handleCancelRename = () => {
    setIsRenaming(false);
    setEditingName(album.name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirmRename();
    } else if (e.key === 'Escape') {
      handleCancelRename();
    }
  };
  
  // ドラッグ＆ドロップイベントハンドラ
  const handleDragStart = (e: React.DragEvent) => {
    e.stopPropagation();
    // albumIdをドラッグデータに設定
    e.dataTransfer.setData('application/album-id', album.id);
    e.dataTransfer.effectAllowed = 'move';
  };
  
 const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const draggedAlbumId = e.dataTransfer.types.includes('application/album-id') 
      ? e.dataTransfer.getData('application/album-id') 
      : null;
    
    // 同名チェックと自分自身へのドロップチェック
    if (draggedAlbumId === album.id) {
      e.dataTransfer.dropEffect = 'none';
      return;
    }

    // 同名の子アルバムがある場合はドロップを無効化
    // ここでは一旦スキップし、ドロップ時にチェック
    //const hasChildWithSameName = album.children?.some(child => {
    //  return false;
    //});

    e.dataTransfer.dropEffect = 'move';
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const draggedAlbumId = e.dataTransfer.getData('application/album-id');
    
    if (draggedAlbumId === album.id) return;
    
    // 同名チェック
    if (draggedAlbumId && onMoveAlbum) {
      // 現在のアルバムツリーから移動対象のアルバムを検索
      const findDraggedAlbum = (tree: AlbumType[], targetId: string): AlbumType | null => {
        for (const item of tree) {
          if (item.id === targetId) return item;
          if (item.children) {
            const found = findDraggedAlbum(item.children, targetId);
            if (found) return found;
          }
        }
        return null;
      };

      onMoveAlbum(draggedAlbumId, album.id);
    }

    const draggedPhotoId = e.dataTransfer.getData('application/photo-id');
    const draggedPhotoName = e.dataTransfer.getData('application/photo-name');
    
    if (draggedPhotoId && onMovePhoto) {
      if (confirm(`"${draggedPhotoName}" を "${album.name}" アルバムに移動しますか？`)) {
        onMovePhoto(draggedPhotoId, album.id);
      }
    }
  };

  // ドラッグターゲット時の強調
  const itemClassName = `w-full transition-all duration-200 ${
    isDragging ? 'opacity-40 scale-95' : ''
  } ${
    isDropTarget
      ? 'bg-blue-500 bg-opacity-30 dark:bg-blue-400/30 border-4 border-blue-500 rounded-lg shadow-2xl ring-4 ring-blue-400 transform scale-110'
      : ''
  }`;

  return (
    <div className={itemClassName}>
      <SidebarMenuItem>
        <ContextMenu>
          <ContextMenuTrigger>
            <SidebarMenuButton
              onClick={() => onSelectAlbum(album.id)} 
              className="flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              style={{ paddingLeft: `${(level * 16) + 8}px` }}
              draggable
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {hasChildren && (
                <button 
                  onClick={toggleExpand} 
                  className="h-4 w-4 flex items-center justify-center mr-1"
                >
                  {isExpanded ? 
                    <ChevronDown className="h-3 w-3" /> : 
                    <ChevronRight className="h-3 w-3" />
                  }
                </button>
              )}
              {!hasChildren && <div className="w-4 mr-1" />}
              <Folder className="h-4 w-4" />
              {isRenaming ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={handleConfirmRename}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border border-primary rounded px-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <span>{album.name}</span>
              )}
            </SidebarMenuButton>
          </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          {canWrite && (
            <>
              <ContextMenuItem onClick={handleAddAlbum}>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>アルバム追加</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={handleAddPhoto}>
                <Image className="mr-2 h-4 w-4" />
                <span>写真追加</span>
              </ContextMenuItem>
            </>
          )}
          {canAdmin && (
            <>
            <ContextMenuItem onClick={handleShareAlbum}>
              <Share className="mr-2 h-4 w-4" />
              <span>アルバム共有</span>
            </ContextMenuItem>
            <ContextMenuItem >
    
              <span>共有ユーザ</span>
            </ContextMenuItem>
            </>
          )}
          {(canWrite || canAdmin) && <ContextMenuSeparator />}
          {canAdmin && (
            <>
              <ContextMenuItem onClick={handleRenameAlbum}>
                <Pencil className="mr-2 h-4 w-4" />
                <span>アルバム名変更</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={handleDeleteAlbum} className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>アルバム削除</span>
              </ContextMenuItem>
            </>
          )}
          {/* 読み取り専用ユーザーには何も表示しない、または閲覧専用メニューを表示 */}
          {!canWrite && !canAdmin && (
            <ContextMenuItem disabled>
              <Eye className="mr-2 h-4 w-4" />
              <span>閲覧専用</span>
            </ContextMenuItem>
          )}
        </ContextMenuContent>
        </ContextMenu>
      </SidebarMenuItem>
      
      {isExpanded && hasChildren && (
        <div className="w-full">
          {album.children.map((child) => (
            <AlbumTreeNode 
              key={child.id} 
              album={child} 
              level={level + 1}
              onSelectAlbum={onSelectAlbum}
              onAddAlbum={onAddAlbum}
              onAddPhoto={onAddPhoto}
              onRenameAlbum={onRenameAlbum}
              onDeleteAlbum={onDeleteAlbum}
              onShareAlbum={onShareAlbum}
              onMoveAlbum={onMoveAlbum}
              onMovePhoto={onMovePhoto}
              isSharedAlbum={isSharedAlbum}                    // 親から継承
              userPermission={child.userPermission || userPermission} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
// src/components/AppLayout.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from '../components/Header';
import type { AlbumType, Photo } from '@/types';
import { Authenticator } from '@aws-amplify/ui-react';
import AlbumContents from './AlbumContents';
import { createAlbum, deleteAlbum, fetchAlbums, fetchPhotos, renameAlbum, syncUserToBackend, updateAlbumParent, updatePhotoAlbum } from '@/api/api';
import { buildAlbumTree, findAlbumById, flattenAlbums, normailzeRowAlbum } from '@/components/Album';
import PhotoUploadModal from './Modal/PhotoUploadModal';
import AlbumShareModal from './Modal/AlbumShareModal';
import AlbumCreateModal from './Modal/AlbumCreateModal';
import '@aws-amplify/ui-react/styles.css';

export function AppLayout() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [albumTree, setAlbumTree] = useState<AlbumType[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createModalParentId, setCreateModalParentId] = useState<string>('');
  
  useEffect(() => {
    const initialize = async () => {
      await syncUserToBackend();
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
    };
    initialize();
  }, []);

  useEffect(() => {
    const loadPhotos = async () => {
      if (!selectedAlbum) {
        setPhotos([]);
        return;
      }

      try {
        const albumPhotos = await fetchPhotos(selectedAlbum.id);
        setPhotos(albumPhotos);
      } catch (error) {
        console.error('Error loading photos:', error);
        setPhotos([]);
      }
    };

    loadPhotos();
  }, [selectedAlbum]);

  // 既存のアルバム名を取得する関数
  const getExistingAlbumNames = (parentId: string): string[] => {
    if (!parentId) {
      // ルートレベルのアルバム名
      return albumTree.map(album => album.name);
    }
    
    const parentAlbum = findAlbumById(albumTree, parentId);
    return parentAlbum?.children?.map(child => child.name) || [];
  };

  // アルバム追加
  const handleAddAlbum = async (albumId?: string) => {
    const parentId = albumId || '';
    setCreateModalParentId(parentId);
    setIsCreateModalOpen(true);
  };

  // モーダルからのアルバム作成確認
  const handleConfirmCreateAlbum = async (albumName: string) => {
    try {
      await createAlbum(albumName, createModalParentId);
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
    } catch (e) {
      throw new Error("アルバムの作成に失敗しました");
    }
  };

  const handleRenameAlbum = async (albumId: string, newName: string) => {
    const found = findAlbumById(albumTree, albumId);
    if (!found) return false;
    
    // 同名チェック
    const parentId = found.parentAlbumId || '';
    const existingNames = getExistingAlbumNames(parentId);
    const filteredNames = existingNames.filter(name => name !== found.name); // 自分自身は除外
    
    if (filteredNames.includes(newName)) {
      alert('このアルバム名は既に存在します');
      return false;
    }
    
    try {
      await renameAlbum(albumId, newName);
      
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
      return true;
    } catch (e) {
      alert("アルバム名の変更に失敗しました");
      return false;
    }
  };

  // アルバム削除
  const handleDeleteAlbum = async (albumId: string) => {
    if (!confirm("このアルバムを削除してもよろしいですか？")) return;
    
    try {
      await deleteAlbum(albumId);
      
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
      
      // 選択中のアルバムだった場合、選択解除
      if (selectedAlbum?.id === albumId) {
        setSelectedAlbum(null);
      }
    } catch (e) {
      alert("アルバムの削除に失敗しました");
    }
  };

  // アルバム移動 (ドラッグ＆ドロップ)  
  const handleMoveAlbum = async (albumId: string, targetAlbumId: string) => {
    const isDescendant = (albumId: string, potentialDescendantId: string): boolean => {
      const parent = findAlbumById(albumTree, albumId);
      if (!parent || !parent.children) return false;

      return parent.children.some(child => 
        child.id === potentialDescendantId || isDescendant(child.id, potentialDescendantId)
      );
    };
    
    if (albumId.length > 0){
      // 親アルバムを子アルバム内には移動させない
      if (isDescendant(albumId, targetAlbumId)) {
        alert("この操作はできません: 親アルバムを子アルバムの中に移動することはできません");
        return;
      }
      
      // 修正: 同名チェックを追加
      const draggedAlbum = findAlbumById(albumTree, albumId);
      const targetAlbum = findAlbumById(albumTree, targetAlbumId);
      
      if (draggedAlbum && targetAlbum) {
        const hasChildWithSameName = targetAlbum.children?.some(child => 
          child.name === draggedAlbum.name && child.id !== draggedAlbum.id
        );
        
        if (hasChildWithSameName) {
          alert(`移動先に同名のアルバム「${draggedAlbum.name}」が既に存在します`);
          return;
        }
      }
      
      try {
        await updateAlbumParent(albumId, targetAlbumId);
        
        const albumList = await fetchAlbums();
        const normalizedAlbums = normailzeRowAlbum(albumList);
        setAlbumTree(buildAlbumTree(normalizedAlbums));
      } catch (e) {
        alert("アルバムの移動に失敗しました");
        console.error(e);
      }
    }
  };

  const handleAddPhoto = () => {
    if (!selectedAlbum) {
      alert('写真をアップロードするアルバムを選択してください');
      return;
    }
    setIsUploadModalOpen(true);
  };

  const handleSelectFolder = (id: string) => {
    const found = findAlbumById(albumTree, id);
    if (found) setSelectedAlbum(found);
  };

  // ルートに戻る（全アルバムを表示）
  const handleSelectRoot = () => {
    setSelectedAlbum(null);
  };

  const handleUploadComplete = async () => {
    // アップロード完了後に写真を再読み込み
    if (selectedAlbum) {
      try {
        const albumPhotos = await fetchPhotos(selectedAlbum.id);
        setPhotos(albumPhotos);
      } catch (error) {
        console.error('Error refreshing photos after upload:', error);
      }
    }
  };

  // 写真削除のハンドラー（AlbumContentsから呼び出される）
  const handleDeletePhoto = async (photoId: string) => {
    // AlbumContentsで削除処理が行われた後、
    // 親コンポーネントの状態も更新する
    console.log("handleDeletePhoto in AppLayout is fired now")
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
  };

  // 複数写真削除のハンドラー
  const handleDeleteMultiplePhotos = async (photoIds: string[]) => {
    setPhotos(prevPhotos => prevPhotos.filter(photo => !photoIds.includes(photo.id)));
  };

  const handleMovePhoto = async (photoId: string, targetAlbumId: string) => {
    try {
      console.log("handleMovePhoto is fired1")
      // APIを呼び出してバックエンドで写真のアルバムを更新
      await updatePhotoAlbum(photoId, targetAlbumId);
      console.log("handleMovePhoto is fired2")
      // 写真リストを再読み込み
      if (selectedAlbum) {
        const albumPhotos = await fetchPhotos(selectedAlbum.id);
        setPhotos(albumPhotos);
      }
    } catch (e) {
      alert("写真の移動に失敗しました");
      console.error(e);
    }
  };

  const handleShareAlbum = () => {
    if (!selectedAlbum) {
      alert('共有するアルバムを選択してください');
      return;
    }
    setIsShareModalOpen(true);
  }

  const sharedFolders = [
    { id: '10', name: 'Team Project' },
    { id: '11', name: 'Events' },
  ];

  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <div className="flex h-screen">
          <SidebarProvider>
            <AppSidebar  
              user={null}
              albumTree={albumTree}
              sharedFolders={sharedFolders}
              onSelectFolder={handleSelectFolder}
              onSelectRoot={handleSelectRoot}
              onAddAlbum={handleAddAlbum}
              onAddPhoto={handleAddPhoto}
              onRenameAlbum={handleRenameAlbum}
              onDeleteAlbum={handleDeleteAlbum}
              onShareAlbum={handleShareAlbum}
              onMovePhoto={handleMovePhoto}
              onMoveAlbum={handleMoveAlbum}
              onSignOut={signOut}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="border-b p-2 flex items-center">
                <SidebarTrigger className="mr-2" />
                <Header
                  onSearch={setSearchKeyword}
                  onAddAlbum={handleAddAlbum}
                  onAddPhoto={handleAddPhoto}
                />
              </div>
              <main className="flex-1 overflow-auto">
                <div className="flex-1 overflow-auto">
                  <AlbumContents
                    album={selectedAlbum}
                    photos={photos}
                    keyword={searchKeyword}
                    onMovePhoto={handleMovePhoto}
                    onDeletePhoto={handleDeletePhoto}
                    onDeleteMultiplePhotos={handleDeleteMultiplePhotos}
                  />
                </div>
              </main>
            </div>
   
            <PhotoUploadModal
              isOpen={isUploadModalOpen}
              onClose={() => setIsUploadModalOpen(false)}
              albumId={selectedAlbum?.id || null}
              onUploadComplete={handleUploadComplete}
            />

            <AlbumCreateModal
              isOpen={isCreateModalOpen}
              onClose={() => setIsCreateModalOpen(false)}
              onConfirm={handleConfirmCreateAlbum}
              parentAlbum={createModalParentId ? findAlbumById(albumTree, createModalParentId) : null}
              existingNames={getExistingAlbumNames(createModalParentId)}
            />

            <AlbumShareModal
              isOpen={isShareModalOpen}
              onClose={() => setIsShareModalOpen(false)}
              album={selectedAlbum}
              onShare={() => {}}
            />
          </SidebarProvider>
        </div>
      )}
    </Authenticator>
  );
}
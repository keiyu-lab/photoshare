// src/components/AppLayout.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from '../components/Header';
import type { AlbumType, Photo } from '@/types';
import { Authenticator } from '@aws-amplify/ui-react';
import AlbumContents from './AlbumContents';
import { createAlbum, deleteAlbum, fetchAlbums, fetchPhotos, renameAlbum, syncUserToBackend, updateAlbumParent, updatePhotoAlbum, fetchSharedAlbums, shareAlbum } from '@/api/api';
import { buildAlbumTree, findAlbumById, flattenAlbums, normailzeRowAlbum } from '@/components/Album';
import PhotoUploadModal from './Modal/PhotoUploadModal';
import AlbumShareModal from './Modal/AlbumShareModal';
import AlbumCreateModal from './Modal/AlbumCreateModal';
import '@aws-amplify/ui-react/styles.css';

export function AppLayout() {

  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  const [privateAlbumTree, setPrivateAlbumTree] = useState<AlbumType[]>([]);
  const [sharedAlbumTree, setSharedAlbumTree] = useState<AlbumType[]>([]);
  const [selectedAlbumContext, setSelectedAlbumContext] = useState<'private' | 'shared'>('private'); // 新規追加
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createModalParentId, setCreateModalParentId] = useState<string>('');
  
  useEffect(() => {
    const initialize = async () => {
      await syncUserToBackend();

      // プライベートアルバムを取得
      try {
        const privateAlbumList = await fetchAlbums();
        const normalizedPrivateAlbums = normailzeRowAlbum(privateAlbumList);
        setPrivateAlbumTree(buildAlbumTree(normalizedPrivateAlbums));
      } catch (error){
        console.error('Error fetching private albums:', error);
      }
      
      // 共有アルバムを取得
      try {
        const sharedAlbumList = await fetchSharedAlbums();
        const normalizedSharedAlbum = normailzeRowAlbum(sharedAlbumList);
        setSharedAlbumTree(buildAlbumTree(normalizedSharedAlbum));
      } catch (error) {
        console.error('Error fetching shared albums:', error);
      }
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
      return privateAlbumTree.map(album => album.name);
    }
    
    const parentAlbum = findAlbumById(privateAlbumTree, parentId);
    return parentAlbum?.children?.map(child => child.name) || [];
  };

  // アルバム追加
  const handleAddAlbum = async (albumId?: string) => {
    if (selectedAlbumContext === 'shared' && !canPerformAction('write')) {
      alert('この操作を行う権限がありません');
      return;
    }
    const parentId = albumId || '';
    setCreateModalParentId(parentId);
    setIsCreateModalOpen(true);
  };

  const handleRenameAlbum = async (albumId: string, newName: string) => {
    if (selectedAlbumContext === 'shared' && !canPerformAction('admin')) {
      alert('この操作を行う権限がありません');
      return false;
    }
    
    const targetTree = selectedAlbumContext === 'shared' ? sharedAlbumTree : privateAlbumTree;
    const found = findAlbumById(targetTree, albumId);
    if (!found) return false;
    
    // 同名チェックロジックは既存と同じ
    const parentId = found.parentAlbumId || '';
    const existingNames = getExistingAlbumNames(parentId);
    const filteredNames = existingNames.filter(name => name !== found.name);
    
    if (filteredNames.includes(newName)) {
      alert('このアルバム名は既に存在します');
      return false;
    }
    
    try {
      await renameAlbum(albumId, newName);
      
      // 適切なツリーを更新
      if (selectedAlbumContext === 'shared') {
        const sharedAlbumList = await fetchSharedAlbums();
        const normalizedSharedAlbums = normailzeRowAlbum(sharedAlbumList);
        setSharedAlbumTree(buildAlbumTree(normalizedSharedAlbums));
      } else {
        const albumList = await fetchAlbums();
        const normalizedAlbums = normailzeRowAlbum(albumList);
        setPrivateAlbumTree(buildAlbumTree(normalizedAlbums));
      }
      return true;
    } catch (e) {
      alert("アルバム名の変更に失敗しました");
      return false;
    }
  };

  // アルバム削除
  const handleDeleteAlbum = async (albumId: string) => {
    if (selectedAlbumContext === 'shared' && !canPerformAction('admin')) {
      alert('この操作を行う権限がありません');
      return;
    }
    
    if (!confirm("このアルバムを削除してもよろしいですか？")) return;
    
    try {
      await deleteAlbum(albumId);
      
      // 適切なツリーを更新
      if (selectedAlbumContext === 'shared') {
        const sharedAlbumList = await fetchSharedAlbums();
        const normalizedSharedAlbums = normailzeRowAlbum(sharedAlbumList);
        setSharedAlbumTree(buildAlbumTree(normalizedSharedAlbums));
      } else {
        const albumList = await fetchAlbums();
        const normalizedAlbums = normailzeRowAlbum(albumList);
        setPrivateAlbumTree(buildAlbumTree(normalizedAlbums));
      }
      
      if (selectedAlbum?.id === albumId) {
        setSelectedAlbum(null);
      }
    } catch (e) {
      alert("アルバムの削除に失敗しました");
    }
  };

  const handleAddPhoto = () => {
    if (!selectedAlbum) {
      alert('写真をアップロードするアルバムを選択してください');
      return;
    }
    
    if (selectedAlbumContext === 'shared' && !canPerformAction('write')) {
      alert('この操作を行う権限がありません');
      return;
    }
    
    setIsUploadModalOpen(true);
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
    if (selectedAlbumContext === 'shared' && !canPerformAction('write')) {
      alert('この操作を行う権限がありません');
      return;
    }
    
    try {
      await updatePhotoAlbum(photoId, targetAlbumId);
      if (selectedAlbum) {
        const albumPhotos = await fetchPhotos(selectedAlbum.id);
        setPhotos(albumPhotos);
      }
    } catch (e) {
      alert("写真の移動に失敗しました");
      console.error(e);
    }
  };

  const handleMoveMultiplePhotos = async (photoIds: string[], targetAlbumId: string) => {
  if (selectedAlbumContext === 'shared' && !canPerformAction('write')) {
    alert('この操作を行う権限がありません');
    return;
  }
  
  try {
    // 複数の写真を順次移動
    for (const photoId of photoIds) {
      await updatePhotoAlbum(photoId, targetAlbumId);
    }
    
    // 移動完了後、現在のアルバムの写真を再読み込み
    if (selectedAlbum) {
      const albumPhotos = await fetchPhotos(selectedAlbum.id);
      setPhotos(albumPhotos);
    }
  } catch (e) {
    alert("写真の移動に失敗しました");
    console.error(e);
  }
};

  // アルバム移動 (ドラッグ＆ドロップ)  
  const handleMoveAlbum = async (albumId: string, targetAlbumId: string) => {
    const isDescendant = (albumId: string, potentialDescendantId: string): boolean => {
      const parent = findAlbumById(privateAlbumTree, albumId);
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
      
      // 同名チェック
      const draggedAlbum = findAlbumById(privateAlbumTree, albumId);
      const targetAlbum = findAlbumById(privateAlbumTree, targetAlbumId);
      
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
        setPrivateAlbumTree(buildAlbumTree(normalizedAlbums));
      } catch (e) {
        alert("アルバムの移動に失敗しました");
        console.error(e);
      }
    }
  };

  const handleSelectAlbum = (id: string, isShared: boolean = false) => {
    if (isShared) {
      const found = findAlbumById(sharedAlbumTree, id);
      if (found) {
        setSelectedAlbum(found);
        setSelectedAlbumContext('shared');
      }
    } else {
      const found = findAlbumById(privateAlbumTree, id);
      if (found) {
        setSelectedAlbum(found);
        setSelectedAlbumContext('private');
      }
    }
  };

  // ルートに戻る（全アルバムを表示）
  const handleSelectRoot = () => {
    setSelectedAlbum(null);
    setSelectedAlbumContext('private');
  };

  // 権限チェック関数の追加
  const getCurrentUserPermission = (album: AlbumType | null): 'owner' | 'write' | 'read' | null => {
    if (!album || selectedAlbumContext === 'private') return 'owner';
    
    // 共有アルバムの場合、バックエンドからの権限情報を参照
    return album.userPermission || 'read';
  };

  const canPerformAction = (action: 'write' | 'admin'): boolean => {
    const permission = getCurrentUserPermission(selectedAlbum);
    if (!permission) return false;
    
    if (action === 'write') {
      return ['owner', 'write'].includes(permission);
    }
    if (action === 'admin') {
      return permission === 'owner';
    }
    return false;
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

    // モーダルからのアルバム作成確認
  const handleConfirmCreateAlbum = async (albumName: string) => {
    try {
      await createAlbum(albumName, createModalParentId);
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setPrivateAlbumTree(buildAlbumTree(normalizedAlbums));
    } catch (e) {
      throw new Error("アルバムの作成に失敗しました");
    }
  };

  const handleShareAlbum = () => {
    if (!selectedAlbum) {
      alert('共有するアルバムを選択してください');
      return;
    }
    setIsShareModalOpen(true);
  };

  const handleConfirmShare = async (email: string, role: 'read' | 'write') => {
    if (!selectedAlbum) return;
    
    try {
      await shareAlbum(selectedAlbum.id, email, role);
    } catch (error) {
      console.error('Error sharing album:', error);
      throw error;
    }
  };

  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <div className="flex h-screen">
          <SidebarProvider>
            <AppSidebar  
              user={null}
              privateAlbumTree={privateAlbumTree}
              sharedAlbumTree={sharedAlbumTree}
              selectedAlbumId={selectedAlbum?.id}
              onSelectAlbum={handleSelectAlbum}
              onSelectRoot={handleSelectRoot}
              onAddAlbum={handleAddAlbum}
              onAddPhoto={handleAddPhoto}
              onRenameAlbum={handleRenameAlbum}
              onDeleteAlbum={handleDeleteAlbum}
              onShareAlbum={handleShareAlbum}
              onMovePhoto={handleMovePhoto}
              onMoveAlbum={handleMoveAlbum}
              onSignOut={signOut}
              selectedAlbumContext={selectedAlbumContext}
              getCurrentUserPermission={getCurrentUserPermission}
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
                    onMoveMultiplePhotos={handleMoveMultiplePhotos} 
                    onDeletePhoto={handleDeletePhoto}
                    onDeleteMultiplePhotos={handleDeleteMultiplePhotos}
                    privateAlbumTree={privateAlbumTree}
                    sharedAlbumTree={sharedAlbumTree}
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
              parentAlbum={createModalParentId ? findAlbumById(privateAlbumTree, createModalParentId) : null}
              existingNames={getExistingAlbumNames(createModalParentId)}
            />

            <AlbumShareModal
              isOpen={isShareModalOpen}
              onClose={() => setIsShareModalOpen(false)}
              album={selectedAlbum}
              onShare={handleConfirmShare}
            />
          </SidebarProvider>
        </div>
      )}
    </Authenticator>
  );
}
// src/components/AppLayout.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { SidebarTrigger,  SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from '../components/Header';
import type { AlbumType, Photo } from '@/types';
import { Authenticator } from '@aws-amplify/ui-react';
import AlbumContents from './AlbumContents';
import { createAlbum, deleteAlbum, fetchAlbums, fetchImages, renameAlbum, syncUserToBackend } from '@/api/api';
import { buildAlbumTree, findAlbumById, flattenAlbums, normailzeRowAlbum } from '@/components/Album';
import PhotoUploadModal from './Modal/PhotoUploadModal';
import '@aws-amplify/ui-react/styles.css';

export function AppLayout() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [albumTree, setAlbumTree] = useState<AlbumType[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  useEffect(() => {
    const initialize = async () => {
      await syncUserToBackend();
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
    };
    initialize();
  }, []);

  // アルバム追加
  const handleAddAlbum = async (albumId?: string) => {
    const name = prompt("アルバム名を入力してください");
    if (!name) return;
    console.log(albumId)
    const parentAlbum = selectedAlbum ? findAlbumById(albumTree, selectedAlbum?.id) : null;
    const parentAlbumId = albumId ? albumId: (parentAlbum ? parentAlbum.id : "");
    try {
      await createAlbum(name, parentAlbumId);
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
    } catch (e) {
      alert("アルバムの作成に失敗しました");
    }
  };

  const handleRenameAlbum = async (albumId: string) => {
    const found = findAlbumById(albumTree, albumId);
    if (!found) return;
    
    const newName = prompt("新しいアルバム名を入力してください", found.name);
    if (!newName || newName === found.name) return;
    
    try {
      await renameAlbum(albumId, newName);
      
      const albumList = await fetchAlbums();
      const normalizedAlbums = normailzeRowAlbum(albumList);
      setAlbumTree(buildAlbumTree(normalizedAlbums));
    } catch (e) {
      alert("アルバム名の変更に失敗しました");
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

  const handleUploadComplete = async () => {
    // アップロード完了後に写真を再読み込み
    if (selectedAlbum) {
      try {
        const albumPhotos = await fetchImages(selectedAlbum.id);
        setPhotos(albumPhotos);
      } catch (error) {
        console.error('Error refreshing photos after upload:', error);
      }
    }
  };

  
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
            albumTree={albumTree}
            sharedFolders={sharedFolders}
            onSelectFolder={handleSelectFolder}
            onAddAlbum={handleAddAlbum}
            onAddPhoto={handleAddPhoto}
            onRenameAlbum={handleRenameAlbum}
            onDeleteAlbum={handleDeleteAlbum}
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
                />
              </div>
              <footer className="p-2 text-xs text-center text-gray-400 border-t min-h-[40px]">
                Logged in as {user?.userId ?? 'unknown'}
                <button className="ml-4 text-blue-500" onClick={signOut}>
                  Sign out
                </button>
              </footer>
            </main>
          </div>
 
          <PhotoUploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            albumId={selectedAlbum?.id || null}
            onUploadComplete={handleUploadComplete}
          />
        </SidebarProvider>
      </div>
    )}
  </Authenticator>
);
}
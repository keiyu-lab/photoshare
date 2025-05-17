// src/components/AppLayout.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { SidebarTrigger,  SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from '../components/Header';
import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';
import type { Album, Photo } from '@/types';
import { Authenticator } from '@aws-amplify/ui-react';
import AlbumContents from './AlbumContents';



export function AppLayout() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);


    // cognitoの認証後ユーザ情報をバックエンドに送信
    const syncUserToBackend = async () => {
        try {
            const userAttributes = await fetchUserAttributes();
            const {idToken} = (await fetchAuthSession()).tokens ?? {};
            const sub = userAttributes.sub;
            const email = userAttributes.email;
           
            await fetch(`http://localhost:3001/users/sync`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${idToken}`,
                },
                body: JSON.stringify({
                    cognito_sub: sub,
                    email: email,
                }),
            });
        }
        catch (e) { console.log(e); }
    };

    const handleAddAlbum = () => {
        alert('アルバム追加機能');
    };

    const handleAddPhoto = () => {
        alert('写真追加機能');
    };
    
    useEffect(() =>{
        syncUserToBackend();
    }, []);

  // フォルダデータ
  const myFolders = [
    { id: '1', name: 'Travel' },
    { id: '2', name: 'Work' },
    { id: '3', name: 'Family' },
  ];
  
  const sharedFolders = [
    { id: '10', name: 'Team Project' },
    { id: '11', name: 'Events' },
  ];

  const handleSelectFolder = (id: string) => {
    console.log('Selected folder:', id);
    // 実際のフォルダ選択ロジックをここに記述
  };
  
  return (
  <Authenticator socialProviders={['google']}>
    {({ signOut, user }) => (
      <div className="flex h-screen">
        <SidebarProvider>
          <AppSidebar  
            myFolders={myFolders}
            sharedFolders={sharedFolders}
            onSelectFolder={handleSelectFolder}
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
              <footer className="p-2 text-xs text-center text-gray-400 border-t">
                Logged in as {user?.userId ?? 'unknown'}
                <button className="ml-4 text-blue-500" onClick={signOut}>
                  Sign out
                </button>
              </footer>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )}
  </Authenticator>
);
}
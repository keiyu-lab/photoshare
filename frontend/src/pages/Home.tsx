// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes, fetchAuthSession } from '@aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';
import type { Album, Photo } from '../types/index.ts';
import AlbumContents from '../components/AlbumContents';


function Home() {

    return (
        <Authenticator socialProviders={['google']}>
        {({ signOut, user }) => (
            <div className="h-full flex flex-col">
                <div className="flex-1 overflow-auto">
                    <AlbumContents
                        album={selectedAlbum}
                        photos={photos}
                        keyword={searchKeyword}
                    />
                </div>
                <footer className="p-2 text-xs text-center text-gray-400 border-t">
                    Logged in as {user?.userId ?? 'unknown'}{' '}
                    <button className="ml-4 text-blue-500" onClick={signOut}>
                    Sign out
                    </button>
                </footer>
            </div>
        )}
        </Authenticator>
    );
}

export default Home;
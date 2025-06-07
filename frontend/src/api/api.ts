import type { AlbumType } from '@/types';
import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

const API_BASE_URL =  'http://localhost:3001';

// cognitoの認証後ユーザ情報をバックエンドに送信
export const syncUserToBackend = async () => {
  try {
      const userAttributes = await fetchUserAttributes();
      const {idToken} = (await fetchAuthSession()).tokens ?? {};
      const sub = userAttributes.sub;
      const email = userAttributes.email;
     
      await fetch(`${API_BASE_URL}/users/sync`, {
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

export const fetchAlbums = async (): Promise<AlbumType[]> => {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    const res = await fetch(`${API_BASE_URL}/albums`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch albums");
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const createAlbum = async (albumName: string, parentAlbumId: string) => {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    const res = await fetch(`${API_BASE_URL}/albums`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        name: albumName,
        parent_album_id: parentAlbumId
      }),
    });

    if (!res.ok) throw new Error("Failed to create album");
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteAlbum = async (albumId: string) => {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    const res = await fetch(`${API_BASE_URL}/albums/${albumId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!res.ok) throw new Error("Failed to delete album");
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const renameAlbum = async (albumId: string, newName: string) => {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    const res = await fetch(`${API_BASE_URL}/albums/${albumId}/rename`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ name: newName }),
    });

    if (!res.ok) throw new Error("Failed to rename album");
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const updateAlbumParent = async (albumId: string, newParentId: string) => {

  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    const response = await fetch(`${API_BASE_URL}/albums/${albumId}/move`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ parentAlbumId: newParentId }),
    });
    
    if (!response.ok) throw new Error("Failed to update parent album id");
    
    return await response.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const uploadPhoto = async (file: File, parentAlbumId: string) => {
    if (!file) return alert('ファイルを選択してください');

    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    const formData = new FormData();
    formData.append('image', file);
    formData.append('albumId', parentAlbumId);
    try {
        const res = await fetch(`${API_BASE_URL}/images`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
            body: formData,
        });

        if (!res.ok) throw new Error('アップロード失敗');
        return await res.json();
    }catch(e){
        console.error(e);
        throw e;
    }
};

export const searchPhotos = async (query: string, limit: number = 20) => {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    try {
        const res = await fetch(`${API_BASE_URL}/images/search`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, limit }),
        });

        if (!res.ok) throw new Error('Search failed');
        return await res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const fetchPhotos = async (albumId: string) => {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    try {
        const res = await fetch(`${API_BASE_URL}/images/${albumId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        
        return await res.json();
    } catch(e){
        console.error(e);
        throw e;
    }
}

export const deletePhoto = async (photoId: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
      const res = await fetch(`${API_BASE_URL}/images/${photoId}`, {
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${idToken}`,
          },
      })
      
      return await res.json();
  } catch(e){
      console.error(e);
      throw e;
  }
}

export const updatePhotoAlbum = async (photoId: string, targetAlbumId: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
      const res = await fetch(`${API_BASE_URL}/images/${photoId}/move`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ targetAlbumId: targetAlbumId }),
      })
      console.log("updatePhotoAlbum fired")
      return await res.json();
  } catch(e){
      console.error(e);
      throw e;
  }
}

export const fetchUserName = async () => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
      const res = await fetch(`${API_BASE_URL}/user/`, {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${idToken}`,
          },
      })
      
      return await res.json();
  } catch(e){
      console.error(e);
      throw e;
  }
}

export const updateUserName = async (newName: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
      const res = await fetch(`${API_BASE_URL}/user/`, {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ name: newName }),
      })
      
      return await res.json();
  } catch(e){
      console.error(e);
      throw e;
  }
}

// アルバムを共有（招待メール送信）
export const shareAlbum = async (albumId: string, email: string, role: 'read' | 'write') => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
    const response = await fetch(`${API_BASE_URL}/albums/share`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        albumId,
        email,
        role
      })
    });
    
    if (!response.ok) {
      console.log(response)
      throw new Error('Failed to share album');
    }

    return await response.json();
  } catch (e) {
    console.error('Error sharing album:', e);
    throw e;
  }
};

// 招待を受諾（トークンベース）
export const acceptInvitation = async (token: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
    const response = await fetch(`${API_BASE_URL}/albums/accept`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ token })
    });
    
    if (!response.ok) {
      throw new Error('Failed to accept invitation');
    }

    return await response.json();
  } catch (e) {
    console.error('Error accepting invitation:', e);
    throw e;
  }
};

// 共有されたアルバム一覧を取得
export const fetchSharedAlbums = async (): Promise<AlbumType[]> => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
    const response = await fetch(`${API_BASE_URL}/albums/shared`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch shared albums');
    }

    return await response.json();
  } catch (e) {
    console.error('Error fetching shared albums:', e);
    throw e;
  }
};

// アルバムの共有状況を取得
export const getAlbumSharedStatus = async (albumId: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
    const response = await fetch(`${API_BASE_URL}/albums/${albumId}/members`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to get album shared status');
    }

    return await response.json();
  } catch (e) {
    console.error('Error getting album shared status:', e);
    throw e;
  }
};

// 共有を取り消す
export const removeAlbumShare = async (albumId: string, userId: string) => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  try {
    const response = await fetch(`${API_BASE_URL}/albums/${albumId}/members/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to remove album share');
    }

    return await response.json();
  } catch (e) {
    console.error('Error removing album share:', e);
    throw e;
  }
};
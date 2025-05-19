import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

// cognitoの認証後ユーザ情報をバックエンドに送信
export const syncUserToBackend = async () => {
  try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes)
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

export const fetchAlbums = async () => {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    const res = await fetch(`http://localhost:3001/albums`, {
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
        console.log("albumName:", albumName, "parentAlbumId:", parentAlbumId);
    console.log(idToken)
    const res = await fetch(`http://localhost:3001/albums`, {
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
    const res = await fetch(`http://localhost:3001/albums/${albumId}`, {
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
    const res = await fetch(`http://localhost:3001/albums/${albumId}`, {
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
export const uploadImage = async (file: File, parentAlbumId: string) => {
    if (!file) return alert('ファイルを選択してください');

    const { idToken } = (await fetchAuthSession()).tokens ?? {};

    const formData = new FormData();
    formData.append('image', file);
    formData.append('albumId', parentAlbumId);
    try {
        const res = await fetch('http://localhost:3001/images/upload', {
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

export const fetchImages = async (albumId: string) => {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    try {
        const res = await fetch(`http://localhost:3001/images/view/${albumId}`, {
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
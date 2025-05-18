import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

// cognitoの認証後ユーザ情報をバックエンドに送信
export const syncUserToBackend = async () => {
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
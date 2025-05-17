import type { Album, Photo } from "../types";

type AlbumContentsProps = {
  album: Album | null;
  photos: Photo[];
  keyword: string;
};

const AlbumContents: React.FC<AlbumContentsProps> = ({ album, photos, keyword }) => {
  const filteredPhotos = photos.filter((photo) =>
    photo.tags.some((tag) => tag.includes(keyword))
  );

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">{album?.name ?? 'アルバムを選択してください'}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="border rounded p-2">
            <img src={`https://s3.amazonaws.com/your-bucket/${photo.s3Key}`} alt="photo" className="w-full h-32 object-cover" />
            <p className="text-sm mt-1">タグ: {photo.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AlbumContents;
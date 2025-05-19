import { useEffect, useState } from 'react';
import type { AlbumType, Photo } from '@/types';
//import { fetchAlbumPhotos, getPhotoPreviewUrl } from '@/api/api';
import { GridIcon, ListIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchImages } from '@/api/api';

interface AlbumContentsProps {
  album: AlbumType | null;
  photos: Photo[];
  keyword: string;
}

export default function AlbumContents({ album, photos: initialPhotos, keyword }: AlbumContentsProps) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const loadPhotos = async () => {
      if (!album) {
        setPhotos([]);
        return;
      }

      setLoading(true);
      try {
        const albumPhotos = await fetchImages(album.id);
        
        setPhotos(albumPhotos);
      } catch (error) {
        console.error('Error loading photos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [album]);

  useEffect(() => {
    console.log(photos)
  }, [photos])

  // キーワードによるフィルタリング
  const filteredPhotos = keyword 
    ? photos.filter(photo => 
        photo.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : photos;

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  if (!album) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-500">アルバムを選択してください</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{album.name}</h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleViewMode}
        >
          {viewMode === 'grid' ? <ListIcon className="h-4 w-4" /> : <GridIcon className="h-4 w-4" />}
        </Button>
      </div>

      {loading ? (
        <div className={viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" : "space-y-2"}>
          {Array.from({ length: 12 }).map((_, i) => (
            viewMode === 'grid' ? (
              <div key={i} className="aspect-square">
                <Skeleton className="h-full w-full rounded" />
              </div>
            ) : (
              <div key={i} className="flex items-center space-x-2 p-2 border rounded">
                <Skeleton className="h-10 w-10 rounded" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            )
          ))}
        </div>
      ) : photos.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-gray-500">写真がありません</p>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" 
          : "space-y-2"
        }>
          {photos.map((photo) => (
            viewMode === 'grid' ? (
              <div 
                key={photo.id} 
                className="relative group aspect-square bg-gray-100 rounded overflow-hidden"
              >
                <img 
                  src={photo.url} 
                  alt={photo.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="text-white p-2 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="truncate text-sm">{photo.name}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                key={photo.id} 
                className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded border"
              >
                <div className="h-12 w-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{photo.name}</p>
                  {/*
                  <p className="text-xs text-gray-500">
                    {new Date(photo.createdAt).toLocaleDateString()} · {formatFileSize(photo.fileSize)}
                  </p>
                  */}
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}

// ファイルサイズを人間にわかりやすい形式で表示
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
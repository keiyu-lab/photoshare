import { useCallback, useEffect, useState } from 'react';
import type { AlbumType, Photo } from '@/types';
import { GridIcon, ListIcon, EllipsisIcon, Download, Search, Trash, Eye, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchPhotos, deletePhoto } from '@/api/api';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PhotoInspectModal from './Modal/PhotoInspectModal';

interface AlbumContentsProps {
  album: AlbumType | null;
  photos: Photo[];
  keyword: string;
  onMovePhoto?: (photoId: string, targetAlbumId: string) => void;
  onMoveMultiplePhotos: (photoIds: string[], targetAlbumId: string) => void; 
  onDeletePhoto: (photoId: string) => void;
  onDeleteMultiplePhotos?: (photoIds: string[]) => void;
  privateAlbumTree: AlbumType[]; 
  sharedAlbumTree: AlbumType[]; 
}

export default function AlbumContents({ 
  album,
  photos, 
  keyword, 
  onMovePhoto,
  onMoveMultiplePhotos,
  onDeletePhoto,
  onDeleteMultiplePhotos,
  sharedAlbumTree, 
  privateAlbumTree, 
}: AlbumContentsProps) 
{
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(false);
  const [inspectPhoto, setInspectPhoto] = useState<Photo | null>(null);
  const [isInspectOpen, setIsInspectOpen] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [draggedPhoto, setDraggedPhoto] = useState<Photo | null>(null);
  
  useEffect(() => {
    setSelectedPhotos(new Set());
    setIsSelectionMode(false);
  }, [album]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+A でアルバム内の全写真を選択
      if (e.ctrlKey && e.key === 'a' && photos.length > 0 && album) {
        e.preventDefault();
        setIsSelectionMode(true);
        const allPhotoIds = new Set(photos.map(photo => photo.id));
        setSelectedPhotos(allPhotoIds);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photos, album]);

  const cancelSelectionMode = () => {
    setIsSelectionMode(false);
    setSelectedPhotos(new Set());
  };

  const filteredPhotos = keyword 
    ? photos.filter(photo => 
        photo.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : photos;

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  const handleInspect = (photo: Photo) => {
    setInspectPhoto(photo);
    setIsInspectOpen(true);
  };

  const handlePhotoClick = (e: React.MouseEvent, photoId: string) => {
    e.stopPropagation();
    
    // Ctrlキーが押されている場合、複数選択モード
    if (e.ctrlKey) {
      setIsSelectionMode(true);
      
      setSelectedPhotos(prevSelected => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(photoId)) {
          newSelected.delete(photoId);

          if (newSelected.size === 0) {
            setIsSelectionMode(false);
          }
        } else {
          newSelected.add(photoId);
        }
        return newSelected;
      });
    } 
    // 選択モード中であれば選択を切り替え
    else if (isSelectionMode) {
      handleSelectionToggleSelect(photoId);
    } 
    // 通常クリックは写真の詳細表示
    else {
      const photo = photos.find(p => p.id === photoId);
      if (photo) {
        handleInspect(photo);
      }
    }
  };

  const handleSelectionToggleSelect = (photoId: string) => {
    setIsSelectionMode(true);
    
    setSelectedPhotos(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(photoId)) {
        newSelected.delete(photoId);

        if (newSelected.size === 0) {
          setIsSelectionMode(false);
        }
      } else {
        newSelected.add(photoId);
      }
      return newSelected;
    });
  };

  const handleDownload = async (photo: Photo) => {
    try {
      const url = photo.url

      const link = document.createElement('a');
      link.href = url;
      link.download = photo.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading photo:', error);
      alert('写真のダウンロードに失敗しました');
    }
  };

  const handleMultipleDownload = async () => {
    const selectedPhotosList = photos.filter(photo => selectedPhotos.has(photo.id));
    
    try {
      // 一つずつダウンロード処理を実行
      for (const photo of selectedPhotosList) {
        await handleDownload(photo);
        // 少し間隔を空ける（ブラウザのダウンロード制限対策）
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    } catch (error) {
      console.error('Error downloading multiple photos:', error);
      alert('複数写真のダウンロードに失敗しました');
    }
  };

  const handleDelete = async (photo: Photo) => {
    console.log("handleDelete is fired in Album")
    if (!confirm(`"${photo.name}" を削除してもよろしいですか？`)) return;
    
    try {
      await deletePhoto(photo.id);
      // 親コンポーネントに削除を通知
      onDeletePhoto(photo.id);
    } catch (error) {
      console.error('Error deleting photo:', error);
      alert('写真の削除に失敗しました');
    }
  };

  const handleMultipleDelete = async () => {
    const selectedPhotosList = photos.filter(photo => selectedPhotos.has(photo.id));
    
    if (!confirm(`選択した${selectedPhotosList.length}枚の写真を削除してもよろしいですか？`)) return;
    
    try {
      const deletePromises = selectedPhotosList.map(photo => deletePhoto(photo.id));
      await Promise.all(deletePromises);
      
      // 親コンポーネントに複数削除を通知
      const deletedIds = selectedPhotosList.map(photo => photo.id);
      onDeleteMultiplePhotos?.(deletedIds);
      
      // 選択をクリア
      setSelectedPhotos(new Set());
      setIsSelectionMode(false);
    } catch (error) {
      console.error('Error deleting multiple photos:', error);
      alert('複数写真の削除に失敗しました');
    }
  };

  // 写真のドラッグ開始
  const handlePhotoDragStart = (e: React.DragEvent, photo: Photo) => {
    e.stopPropagation();
    setDraggedPhoto(photo);
    e.dataTransfer.setData('application/photo-id', photo.id);
    e.dataTransfer.setData('application/photo-name', photo.name);
    e.dataTransfer.effectAllowed = 'move';
  };

  // 写真のドラッグ終了
  const handlePhotoDragEnd = () => {
    setDraggedPhoto(null);
  };

  const navigateToNextPhoto = useCallback(() => {
    if (!inspectPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === inspectPhoto.id);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setInspectPhoto(filteredPhotos[nextIndex]);
  }, [inspectPhoto, filteredPhotos]);

  const navigateToPrevPhoto = useCallback(() => {
    if (!inspectPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === inspectPhoto.id);
    if (currentIndex === -1) return;
    
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setInspectPhoto(filteredPhotos[prevIndex]);
  }, [inspectPhoto, filteredPhotos]);

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
        <div className="flex items-center space-x-2">
          {isSelectionMode && (
            <div className="flex items-center space-x-2 mr-2">
              <span className="text-sm font-medium">{selectedPhotos.size}枚選択中</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={cancelSelectionMode}
              >
                <X className="h-4 w-4 mr-1" />
                キャンセル
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleMultipleDownload}
                disabled={selectedPhotos.size === 0}
              >
                <Download className="h-4 w-4 mr-1" />
                ダウンロード
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={handleMultipleDelete}
                disabled={selectedPhotos.size === 0}
              >
                <Trash className="h-4 w-4 mr-1" />
                削除
              </Button>
            </div>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleViewMode}
          >
            {viewMode === 'grid' ? <ListIcon className="h-4 w-4" /> : <GridIcon className="h-4 w-4" />}
          </Button>
        </div>
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
          {filteredPhotos.map((photo) => (
            viewMode === 'grid' ? (
              <div 
                key={photo.id} 
                className={`relative group aspect-square bg-gray-100 rounded overflow-hidden cursor-move ${
                  selectedPhotos.has(photo.id) ? 'ring-2 ring-blue-500' : ''
                } ${draggedPhoto?.id === photo.id ? 'opacity-50' : ''}`}
                onClick={(e) => handlePhotoClick(e, photo.id)}
                draggable
                onDragStart={(e) => handlePhotoDragStart(e, photo)}
                onDragEnd={handlePhotoDragEnd}
              >
                <img 
                  src={photo.url} 
                  alt={photo.name}
                  className="object-cover w-full h-full pointer-events-none"
                />
                {selectedPhotos.has(photo.id) && (
                  <div className="absolute top-2 right-2 bg-blue-500 rounded-full text-white p-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                )}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="text-white p-2 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                    <p className="truncate text-sm flex-1">{photo.name}</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-white"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EllipsisIcon className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectionToggleSelect(photo.id);
                          }}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          <span>{selectedPhotos.has(photo.id) ? '選択解除' : '選択'}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleInspect(photo);
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          <span>拡大表示</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(photo);
                          }}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          <span>ダウンロード</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(photo);
                          }}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          <span>削除</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                key={photo.id} 
                className={`flex items-center space-x-3 p-2 hover:bg-gray-50 rounded border cursor-move ${
                  selectedPhotos.has(photo.id) ? 'bg-blue-50 border-blue-200' : ''
                } ${draggedPhoto?.id === photo.id ? 'opacity-50' : ''}`}
                onClick={(e) => handlePhotoClick(e, photo.id)}
                draggable
                onDragStart={(e) => handlePhotoDragStart(e, photo)}
                onDragEnd={handlePhotoDragEnd}
              >
                <div className="h-12 w-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden relative">
                  <img 
                    src={photo.url} 
                    alt={photo.name}
                    className="object-cover w-full h-full pointer-events-none"
                  />
                  {selectedPhotos.has(photo.id) && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{photo.name}</p>
                  <p className="text-xs text-gray-500">
                    {photo.createdAt && new Date(photo.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <EllipsisIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectionToggleSelect(photo.id);
                        }}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        <span>{selectedPhotos.has(photo.id) ? '選択解除' : '選択'}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInspect(photo);
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        <span>拡大表示</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(photo);
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        <span>ダウンロード</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-red-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(photo);
                        }}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        <span>削除</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )
          ))}
        </div>
      )}

      <PhotoInspectModal
        photo={inspectPhoto}
        isOpen={isInspectOpen}
        onOpenChange={(open) => {
          setIsInspectOpen(open);
          if (!open) setInspectPhoto(null);
        }}
        onDownload={handleDownload}
        onDelete={handleDelete}
        onNext={navigateToNextPhoto}
        onPrev={navigateToPrevPhoto}
        photosCount={filteredPhotos.length}
        currentIndex={inspectPhoto ? filteredPhotos.findIndex(p => p.id === inspectPhoto.id) : -1}
      />
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
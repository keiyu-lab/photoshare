import type { Photo } from '@/types';
import { ChevronLeft, ChevronRight, Download, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from 'react';

interface PhotoInspectModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDownload: (photo: Photo) => void;
  onDelete: (photo: Photo) => void;
  onNext?: () => void; 
  onPrev?: () => void; 
  photosCount?: number; 
  currentIndex?: number; 
}

export default function PhotoInspectModal({
  photo,
  isOpen,
  onOpenChange,
  onDownload,
  onDelete,
  onNext,
  onPrev,
  photosCount = 0,
  currentIndex = -1
}: PhotoInspectModalProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault();
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onNext, onPrev]);


  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

    
  if (!photo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{photo.name}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-2">
          <div className="flex flex-col items-center">
            <div className="max-h-[70vh] overflow-hidden">
              <img 
                src={photo.url} 
                alt={photo.name}
                className="object-contain max-w-full max-h-[60vh]"
              />
            </div>
                          
              {/* 左矢印 */}
              {onPrev && photosCount > 1 && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-200"
                  aria-label="前の写真"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              
              {/* 右矢印 */}
              {onNext && photosCount > 1 && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-200"
                  aria-label="次の写真"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            
            <div className="w-full mt-4 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">ファイル名:</div>
                <div>{photo.name}</div>

                <div className="font-medium">アップロード者:</div>
                <div>{photo.uploader.name} {photo.uploader.email}</div>

                <div className="font-medium">アップロード日時:</div>
                <div>{photo.createdAt ? new Date(photo.createdAt).toLocaleString() : '-'}</div>

                {photo.meta &&(
                  <>
                    <div className="font-medium">メタ情報:</div>
                    <div>{photo.meta}</div>  
                  </>       
                )}
                {/*
                {photo.size && (
                  <>
                    <div className="font-medium">ファイルサイズ:</div>
                    <div>{formatFileSize(photo.size)}</div>
                  </>
                )}
                
                {photo.type && (
                  <>
                    <div className="font-medium">ファイルタイプ:</div>
                    <div>{photo.type}</div>
                  </>
                )}
                */}
              </div>
            </div>
            
            <div className="flex justify-end w-full mt-4 space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onDownload(photo)}
              >
                <Download className="mr-2 h-4 w-4" />
                ダウンロード
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => {
                  onDelete(photo);
                  onOpenChange(false);
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                削除
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
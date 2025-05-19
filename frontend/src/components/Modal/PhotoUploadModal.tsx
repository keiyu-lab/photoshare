import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '@/api/api';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  albumId: string | null;
  onUploadComplete: () => void;
}

export default function PhotoUploadModal({ isOpen, onClose, albumId, onUploadComplete }: PhotoUploadModalProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!albumId || files.length === 0) return;

    setUploading(true);
    setProgress(0);

    try {
      // 各ファイルをアップロード
      for (let i = 0; i < files.length; i++) {
        await uploadImage(files[i], albumId);
        setProgress(((i + 1) / files.length) * 100);
      }

      // アップロード完了
      onUploadComplete();
      onClose();
      setFiles([]);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('写真のアップロードに失敗しました');
    } finally {
      setUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>写真をアップロード</DialogTitle>
        </DialogHeader>
        
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            multiple
            accept="image/*"
          />

          {files.length === 0 && (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={triggerFileInput}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-900">
                  ファイルをドラッグ＆ドロップするか、クリックして選択してください
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF サポート
                </p>
              </div>
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">選択されたファイル ({files.length})</div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded border"
                  >
                    <div className="flex items-center">
                      <ImageIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm truncate max-w-xs">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={triggerFileInput}
              >
                さらに追加
              </Button>
            </div>
          )}

          {uploading && (
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center mt-1">
                アップロード中... {Math.round(progress)}%
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={onClose} disabled={uploading}>
            キャンセル
          </Button>
          <Button 
            onClick={handleUpload} 
            disabled={files.length === 0 || uploading}
            className="ml-2"
          >
            {uploading ? 'アップロード中...' : 'アップロード'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
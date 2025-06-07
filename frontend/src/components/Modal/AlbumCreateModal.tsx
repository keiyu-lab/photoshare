import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AlbumType } from '@/types';

interface AlbumCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (albumName: string) => Promise<void>;
  parentAlbum: AlbumType | null;
  existingNames: string[]; // 同じ親配下の既存アルバム名リスト
}

export default function AlbumCreateModal({
  isOpen,
  onClose,
  onConfirm,
  parentAlbum,
  existingNames
}: AlbumCreateModalProps) {
  const [albumName, setAlbumName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = albumName.trim();
    if (!trimmedName) {
      setError('アルバム名を入力してください');
      return;
    }
    
    // 同名チェック
    if (existingNames.includes(trimmedName)) {
      setError('このアルバム名は既に存在します');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await onConfirm(trimmedName);
      setAlbumName('');
      onClose();
    } catch (error) {
      setError('アルバムの作成に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setAlbumName('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新しいアルバムを作成</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="album-name">アルバム名</Label>
              <Input
                id="album-name"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                placeholder="アルバム名を入力してください"
                autoFocus
              />
              {parentAlbum && (
                <p className="text-sm text-muted-foreground">
                  作成先: {parentAlbum.name}
                </p>
              )}
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              キャンセル
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? '作成中...' : '作成'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
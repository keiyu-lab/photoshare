import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, UserPlus, Check, AlertCircle } from 'lucide-react';
import type { AlbumType } from '@/types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: AlbumType;
  onShare: (email: string, role: 'read' | 'write') => Promise<void>;
}

export default function AlbumShareModal({ isOpen, onClose, album, onShare }: ShareModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'read' | 'write'>('read');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'メールアドレスを入力してください' });
      return;
    }

    // 簡単なメールバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: '有効なメールアドレスを入力してください' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      await onShare(email, role);
      setMessage({ type: 'success', text: '招待メールを送信しました' });
      setEmail('');
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 2000);
    } catch (error) {
      setMessage({ type: 'error', text: '招待の送信に失敗しました' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setRole('read');
    setMessage(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
              <UserPlus className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div>アルバムを共有</div>
              <p className="text-sm text-muted-foreground font-normal">"{album ? album.name: ""}"</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* メッセージ */}
            {message && (
              <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
                {message.type === 'success' ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}

            {/* メールアドレス入力 */}
            <div className="grid gap-2">
              <Label htmlFor="email">招待するメールアドレス</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="example@email.com"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* 権限設定 */}
            <div className="grid gap-3">
              <Label>権限</Label>
              <RadioGroup
                value={role}
                onValueChange={(value) => setRole(value as 'read' | 'write')}
                disabled={isLoading}
              >
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="read" id="read" className="mt-1" />
                  <Label htmlFor="read" className="grid gap-1 cursor-pointer">
                    <div className="font-medium">閲覧のみ</div>
                    <div className="text-sm text-muted-foreground">
                      写真の表示とダウンロードのみ可能
                    </div>
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="write" id="write" className="mt-1" />
                  <Label htmlFor="write" className="grid gap-1 cursor-pointer">
                    <div className="font-medium">編集可能</div>
                    <div className="text-sm text-muted-foreground">
                      写真の追加・削除・編集、アルバムの追加・削除・編集が可能
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1"
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  送信中...
                </>
              ) : (
                '招待を送信'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

  );
}
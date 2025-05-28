import React, { useState } from 'react';
import { X, Mail, UserPlus, Check, AlertCircle } from 'lucide-react';
import type { AlbumType } from '@/types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: AlbumType;
  onShare: (email: string, role: 'read' | 'write') => Promise<void>;
}

export default function ShareModal({ isOpen, onClose, album, onShare }: ShareModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'read' | 'write'>('read');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async () => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
              <UserPlus className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">アルバムを共有</h2>
              <p className="text-sm text-gray-500">"{album.name}"</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* メッセージ */}
        {message && (
          <div className={`mx-6 mt-4 p-3 rounded-md flex items-center gap-2 ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.type === 'success' ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span className="text-sm">{message.text}</span>
          </div>
        )}

        {/* フォーム */}
        <div className="p-6">
          <div className="space-y-4">
            {/* メールアドレス入力 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                招待するメールアドレス
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* 権限選択 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                権限
              </label>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="read"
                    checked={role === 'read'}
                    onChange={(e) => setRole(e.target.value as 'read' | 'write')}
                    className="mt-1"
                    disabled={isLoading}
                  />
                  <div>
                    <div className="font-medium text-gray-900">閲覧のみ</div>
                    <div className="text-sm text-gray-500">写真の表示とダウンロードのみ可能</div>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="write"
                    checked={role === 'write'}
                    onChange={(e) => setRole(e.target.value as 'read' | 'write')}
                    className="mt-1"
                    disabled={isLoading}
                  />
                  <div>
                    <div className="font-medium text-gray-900">編集可能</div>
                    <div className="text-sm text-gray-500">写真の追加・削除・編集,アルバムの追加・排除・編集が可能</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* ボタン */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              disabled={isLoading}
            >
              キャンセル
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  送信中...
                </>
              ) : (
                '招待を送信'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress'; 
import { acceptInvitation, syncUserToBackend } from '@/api/api';

const AcceptInvitationPage: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('');
  const [albumId, setAlbumId] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(10); // プログレスバー用

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    if (status === 'loading') {
      // ローディングアニメーションのためのダミープログレス
      setLoadingProgress(10);
      progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 15;
        });
      }, 300);
    }

    const processInvitation = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');

      if (!token) {
        setMessage('招待トークンが見つかりません。URLを確認してください。');
        setStatus('error');
        if (progressInterval) clearInterval(progressInterval);
        setLoadingProgress(100);
        return;
      }

      try {

        try {
        //await syncUserToBackend();
        } catch (e) {
          setMessage('この操作を行うにはログインが必要です。ログイン後、再度招待リンクをお試しください。');
          setStatus('error');
          // オプション: ログインページにリダイレクト (トークン情報をstateで渡すなど)
          // navigate('/login', { state: { from: location, tokenToProcess: token } });
          if (progressInterval) clearInterval(progressInterval);
          setLoadingProgress(100);
          return;
        }

        setLoadingProgress(70); // API呼び出し前

        const result = await acceptInvitation(token);
        
        if (progressInterval) clearInterval(progressInterval);
        setLoadingProgress(100);

        setMessage(result.message || '招待を承諾しました！');
        setAlbumId(result.albumId);
        setStatus('success');

      } catch (error: any) {
        if (progressInterval) clearInterval(progressInterval);
        setLoadingProgress(100);
        console.error('Error accepting invitation:', error);
        setMessage(error.message || '招待の承諾処理中にエラーが発生しました。');
        setStatus('error');
      }
    };

    // ログイン状態の確認などを考慮して、少し遅延させて処理を開始する（任意）
    const timer = setTimeout(() => {
        processInvitation();
    }, 500);


    return () => {
      clearTimeout(timer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [location, navigate, status]); // status を依存配列に追加して、再試行ロジックなどを組み込みやすくする（今回は未使用）

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">招待の承諾処理</h1>

        {status === 'loading' && (
          <div className="space-y-4">
            <p className="text-center text-gray-600">招待を確認しています...</p>
            <Progress value={loadingProgress} className="w-full" />
            {/* <Skeleton className="w-3/4 h-8 mx-auto" />
            <Skeleton className="w-full h-10 mx-auto" /> */}
          </div>
        )}

        {status === 'success' && (
          <Alert variant="default" className="bg-green-50 border-green-300 text-green-700">
            <AlertTitle>成功しました！</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
            <div className="mt-4 flex flex-col space-y-2">
              {albumId && (
                <Button onClick={() => navigate(`/albums/${albumId}`)} variant="outline" className="w-full">
                  アルバムへ移動
                </Button>
              )}
              <Button onClick={() => navigate('/')} className="w-full"> {/* AppLayoutのホームページへ */}
                ダッシュボードへ
              </Button>
            </div>
          </Alert>
        )}

        {status === 'error' && (
          <Alert variant="destructive">
            <AlertTitle>エラーが発生しました</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
            <div className="mt-4">
              <Button onClick={() => navigate('/')} variant="outline" className="w-full">
                トップページへ戻る
              </Button>
            </div>
          </Alert>
        )}
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} あなたの写真共有アプリ</p>
      </footer>
    </div>
  );
};

export default AcceptInvitationPage;
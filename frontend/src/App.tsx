// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/AppLayout';
import "./globals.css"
import AcceptInvitationPage from './pages/AcceptInvitationPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout></AppLayout>} />
          <Route path="/accept-invitation" element={<AcceptInvitationPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
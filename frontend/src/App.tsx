// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppLayout } from '@/components/AppLayout';
import Home from './pages/Home';
import "./globals.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout></AppLayout>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
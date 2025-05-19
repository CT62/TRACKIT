import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './routes/Login'
import Signup from './routes/Signup'
import Navbar from './components/Navbar.tsx'
import Jumbotron from './components/Jumbotron.tsx'
import AboutSection from './components/About.tsx'


const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <BrowserRouter>
    <div className="font-inter">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
	<Route path="signup" element={<Signup />} />
      </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);

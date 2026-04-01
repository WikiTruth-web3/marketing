import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from '@/pages/Home';
import Roadmap from '@/pages/Roadmap';
import Tech from '@/pages/Tech'
import Team from '@/pages/Team';
import Blog from '@/pages/Blog';

export default function App() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <Header />
      
      <main >
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Tech />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
      </main>

      <Footer />
    </div>
  );
}

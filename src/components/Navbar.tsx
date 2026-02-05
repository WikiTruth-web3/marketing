import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PROJECT_NAME } from '@/content/project';
import { Brand } from './base/brand';
import { navLinks } from '@/content/navbar';
import LaunchAppModal from './modals/LaunchAppModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLaunchOpen, setIsLaunchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="
            border border-primary/10
            glass-panel rounded-xl px-6 py-3 
            flex items-center justify-between 
            shadow-[0_0_20px_rgba(0,0,0,0.5)]
          ">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="
                w-8 h-8 flex items-center justify-center "
              >
                <img src='/logo/logo.svg' alt="Logo" className="w-full h-full" />
              </div>
              <Brand />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isExternal = link.target === '_blank' || !link.href.startsWith('/');
                
                if (isExternal) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`
                      text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive(link.href)
                        ? 'text-primary neon-text border-b-2 border-primary '
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsLaunchOpen(true)}
                className="
                hidden md:flex items-center gap-2 
                bg-primary text-black px-5 py-2 rounded-lg 
                font-bold text-sm 
                hover:scale-105 hover:shadow-[0_0_15px_rgba(19,236,91,0.5)] 
                transition-all active:scale-95"
              >
                <span>Launch App</span>
              </button>

              <button 
                className="md:hidden text-white/80 hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
              {navLinks.map((link) => {
                const isExternal = link.target === '_blank' || !link.href.startsWith('/');
                
                if (isExternal) {
                   return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium p-2 rounded-md text-white/70 hover:bg-white/5"
                    >
                      {link.name}
                    </a>
                   )
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium p-2 rounded-md ${
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsLaunchOpen(true);
                }}
                className="
                w-full mt-2 flex items-center justify-center 
                gap-2 bg-primary text-black px-5 py-3 rounded-lg 
                font-bold hover:brightness-110 transition-all"
              >
                <span>Launch App</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <LaunchAppModal 
        isOpen={isLaunchOpen}
        onClose={() => setIsLaunchOpen(false)}
      />
    </>
  );
};

export default Navbar;
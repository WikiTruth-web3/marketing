import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './base/brand';
import { navLinks } from '@/content/navbar';
import LaunchAppModal from './modals/LaunchAppModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLaunchOpen, setIsLaunchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-300 h-12 md:h-16 border-b ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-white/10' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            
            <Brand />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isExternal = link.target === '_blank' || !link.href.startsWith('/');
              const active = isActive(link.href);

              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium tracking-wider text-white/50 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[13px] font-medium tracking-wider transition-all relative py-1 ${
                    active ? 'text-primary' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-4">
            {/* Launch App Button */}
            <button 
              onClick={() => setIsLaunchOpen(true)}
              className="hidden md:flex items-center gap-2 
              bg-gradient-to-br from-primary to-blue-600 
              text-white px-6 py-2.5 rounded-lg font-bold text-[13px] 
              tracking-wide glow-shadow-blue hover:glow-shadow-blue-lg 
              hover:-translate-y-0.5 transition-all active:scale-[0.98]"
            >
              Launch App
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/30 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-2 shadow-2xl animate-in fade-in zoom-in duration-200 origin-top">
            {navLinks.map((link) => {
              const isExternal = link.target === '_blank' || !link.href.startsWith('/');
              const active = isActive(link.href);
              
              const className = `flex items-center justify-between p-4 rounded-xl text-sm font-medium transition-all ${
                active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`;

              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-40" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={className}
                >
                  {link.name}
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]" />}
                </Link>
              );
            })}
            
            <div className="h-px bg-white/5 my-2" />
            
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsLaunchOpen(true);
              }}
              className="w-full flex items-center justify-center 
              bg-gradient-to-r from-primary to-blue-600 
              text-white p-4 rounded-lg font-bold text-sm tracking-wide 
              glow-shadow-blue active:scale-[0.98] transition-all"
            >
              Launch App
            </button>
          </div>
        )}
      </nav>

      <LaunchAppModal 
        isOpen={isLaunchOpen}
        onClose={() => setIsLaunchOpen(false)}
      />
    </>
  );
};

export default Navbar;
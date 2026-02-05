import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import FooterQuotes from './footer/FooterQuotes';
import ShareModal from './modals/ShareModal';
import { socialLinks } from '@/content/social';
// import { PROJECT_NAME } from '@/content/project';
import { Brand } from './base/brand';

const Footer: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-surface mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <Brand />
              </div>
              {/* Quotes Component replacing static description */}
              <FooterQuotes />
            </div>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-8 h-8
                  flex items-center justify-center 
                  text-white/60 hover:text-primary 
                  transition-all duration-300"
                  title={item.label}
                >
                  <item.icon size={24} />
                </a>
              ))}
              
              <button 
                onClick={() => setIsShareOpen(true)}
                className="
                  w-8 h-8
                  flex items-center justify-center 
                  text-white/60 hover:text-primary 
                  transition-all duration-300"
                title="Share"
              >
                <Share2 size={24} />
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
            <p>SYSTEM_STATUS: OPTIMAL</p>
            <p>BLOCK_HEIGHT: 19,234,992</p>
          </div>
        </div>
      </footer>

      <ShareModal 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </>
  );
};

export default Footer;
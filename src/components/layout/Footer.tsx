import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import FooterQuotes from '@/components/custom/footerQuotes';
import ShareModal from '@/components/modals/shareModal';
import { socialLinks } from '@/content/social';
// import { PROJECT_NAME } from '@/content/project';
import { Brand } from '@/components/base/brand';

const Footer: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-surface-low mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">

            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex items-center gap-2">
                {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
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
                  text-primary-dim hover:text-primary 
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
                  text-primary-dim hover:text-primary 
                  transition-all duration-300"
                title="Share"
              >
                <Share2 size={24} />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
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
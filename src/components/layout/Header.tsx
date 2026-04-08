import React from 'react';
import { Brand } from '@/components/base/brand';
import { Button } from '@/components/base/button';
import NavLinks from '@/components/base/navLinks';
import { navLinks, routerLinks } from '@/content/links';
import { useScreen } from '@/hooks/screen';

export function Header() {
  const { isDesktop } = useScreen();

  return (
    <header className="fixed top-0 left-0 right-0 z-1000 bg-background/80 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center w-full px-2 md:px-6 py-2 max-w-full gap-4">
        <Brand />
        <div className="flex-1 flex justify-center min-w-0 relative">
          <NavLinks links={navLinks} className="text-sm" />
        </div>

        {isDesktop ? (<Button
          onClick={() => window.open(routerLinks.app, '_blank')}
        >
          Launch App
        </Button>) : (<Button
          onClick={() => window.open(routerLinks.app, '_blank')}
        >
          App
        </Button>)
        }
      </nav>
    </header>
  );
}

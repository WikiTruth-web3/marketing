import React from 'react';
import { Brand } from '@/components/base/brand';
import { Button } from '@/components/base/button';
import NavLinks from '@/components/base/navLinks';
import { navLinks } from '@/content/i18n/navLinks';
import { routerLinks } from '@/content/links';
import { useScreen } from '@/hooks/screen';
import type { LanguageType } from '@/types/typesDapp/language';


interface HeaderProps {
  currentPath?: string;
  lang?: LanguageType;
}

export function Header({ currentPath = '/', lang = 'en' }: HeaderProps) {

  const { isDesktop } = useScreen();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const currentUrl = new window.URL(window.location.href);
    let newPathname = currentUrl.pathname;

    // Remove existing language prefix if present
    if (newPathname.startsWith('/zh')) newPathname = newPathname.replace('/zh', '');
    else if (newPathname.startsWith('/ko')) newPathname = newPathname.replace('/ko', '');

    if (newPathname === '') newPathname = '/';

    // Add new language prefix if not 'en'
    if (newLang !== 'en') {
      newPathname = `/${newLang}${newPathname === '/' ? '' : newPathname}`;
    }

    window.location.href = newPathname;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-1000 bg-background/80 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center w-full px-2 md:px-6 py-2 max-w-full gap-4">
        <a href={lang === 'en' ? '/' : `/${lang}`} className="cursor-pointer">
          <Brand />
        </a>
        <div className="flex-1 flex justify-center min-w-0 relative">
          <NavLinks links={navLinks} className="text-sm" currentPath={currentPath} lang={lang} />
        </div>

        <div className="flex items-center gap-4">
          <select 
            value={lang} 
            onChange={handleLangChange}
            className="bg-transparent text-white border border-white/20 rounded px-2 py-1 text-sm outline-none cursor-pointer"
          >
            <option value="en" className="bg-background text-white">EN</option>
            <option value="zh" className="bg-background text-white">ZH</option>
            <option value="ko" className="bg-background text-white">KO</option>
          </select>

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
        </div>
      </nav>
    </header>
  );
}

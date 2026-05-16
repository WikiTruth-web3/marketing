import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { LanguageType, LanguageItem } from '@/types/language';
import { t } from '@/lib/i18nUtils';


export interface NavLinkItem {
  name: string | LanguageItem;
  href: string;
  target?: string;
}

interface NavLinksProps {
  links: NavLinkItem[];
  className?: string;
  currentPath?: string;
  lang?: LanguageType;
}


function isExternalLink(link: NavLinkItem) {
  return link.target === '_blank' || !link.href.startsWith('/');
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className, currentPath = '/', lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const prefix = lang === 'en' ? '' : `/${lang}`;
  
  const getHref = (href: string) => {
    if (href === '/') return prefix === '' ? '/' : prefix;
    return `${prefix}${href}`;
  };

  const isActive = (path: string) => {
    const fullPath = getHref(path);
    if (fullPath === '/') return currentPath === '/';
    return currentPath.startsWith(fullPath);
  };

  const renderLink = (link: NavLinkItem, mobile?: boolean, onNavigate?: () => void) => {
    const external = isExternalLink(link);
    const rowClass = mobile ? 'rounded-lg px-3 py-2 hover:bg-surface-high/80' : '';

    if (external) {
      return (
        <a
          key={`${link.name}-${link.href}`}
          href={link.href}
          target={link.target === '_blank' ? '_blank' : undefined}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
          onClick={onNavigate}
          className={twMerge(
            'text-[13px] font-medium tracking-wider hover:text-primary',
            'transition-colors flex items-center gap-1 group',
            rowClass
          )}
        >
          {t(link.name, lang)}
          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
        </a>
      );
    }

    const fullHref = getHref(link.href);
    const active = isActive(link.href);
    
    return (
      <a
        key={`${link.name}-${link.href}`}
        href={fullHref}
        onClick={onNavigate}
        className={twMerge(
          'text-[13px] font-medium tracking-wider transition-all relative py-1',
          active ? 'text-primary' : ' hover:text-white',
          rowClass
        )}
      >
        {t(link.name, lang)}
        {active && !mobile && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]" />
        )}
      </a>
    );
  };

  return (
    <div className={twMerge('relative flex w-full items-center justify-end md:justify-center', className)}>
      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => renderLink(link))}
      </div>

      <button
        type="button"
        className="md:hidden rounded-lg p-2 hover:bg-surface-high transition-colors -mr-1"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 z-40 bg-black/40"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav"
            className="w-full md:hidden absolute right-0 top-full z-50 mt-2 min-w-48 flex flex-col gap-0.5 rounded-xl border border-primary/30 bg-surface-high/90 p-2 shadow-lg backdrop-blur-xl"
          >
            {links.map((link) => renderLink(link, true, () => setIsOpen(false)))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavLinks;

import React from 'react';
import { X as CloseIcon, Link, Share2 } from 'lucide-react';
import { PiTelegramLogo } from 'react-icons/pi';

import {
  AiOutlineX,
  AiOutlineFacebook,
} from 'react-icons/ai';

import { createPortal } from 'react-dom';
import { description as des } from '@/content/project';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  description?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  url = typeof window !== 'undefined' ? window.location.href : '',
  description = des.en
}) => {
  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!'); // Simple feedback
      onClose();
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: AiOutlineX,
      color: 'hover:bg-cyan-500/20 hover:text-cyan-500 hover:border-cyan-500/50',
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}`, '_blank')
    },
    {
      name: 'Telegram',
      icon: PiTelegramLogo,
      color: 'hover:bg-yellow-500/20 hover:text-yellow-500 hover:border-yellow-500/50',
      action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}`, '_blank')
    },
    {
      name: 'Facebook',
      icon: AiOutlineFacebook,
      color: 'hover:bg-purple-500/20 hover:text-purple-500 hover:border-purple-500/50',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'Copy Link',
      icon: Link,
      color: 'hover:bg-primary/20 hover:text-primary hover:border-primary/50',
      action: handleCopyLink
    }
  ];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal View */}
      <div className="relative w-full max-w-md bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-white">
            <Share2 size={20} className="text-primary" />
            <h3 className="font-bold text-lg">Share Content</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Content Preview */}
        <div className="bg-surface-low rounded-xl p-4 mb-6 border border-white/10">
          <p className="text-white/80 text-sm font-medium mb-1 line-clamp-2">{description}</p>
          <p className="text-white/40 text-xs truncate">{url}</p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-3">
          {shareLinks.map((item) => (
            <button
              key={item.name}
              onClick={item.action}
              className={`flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 transition-all duration-300 group ${item.color}`}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium text-white/80">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShareModal;

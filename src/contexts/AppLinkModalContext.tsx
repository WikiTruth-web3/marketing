"use client";

import React, { createContext, useContext, useState, type ReactNode } from 'react';
import AppLinkModal from '@/components/customer/appLinkModal';

interface AppLinkModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const AppLinkModalContext = createContext<AppLinkModalContextType | undefined>(undefined);

interface AppLinkModalProviderProps {
  children: ReactNode;
}

// AppLinkModal Provider component
const AppLinkModalProvider: React.FC<AppLinkModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const contextValue: AppLinkModalContextType = {
    openModal,
    closeModal,
    isOpen,
  };

  return (
    <AppLinkModalContext.Provider value={contextValue}>
      {children}
      <AppLinkModal open={isOpen} onOpenChange={setIsOpen} />
    </AppLinkModalContext.Provider>
  );
};

// useAppLinkModal hook
export const useAppLinkModal = (): AppLinkModalContextType => {
  const context = useContext(AppLinkModalContext);
  if (context === undefined) {
    throw new Error('useAppLinkModal must be used within an AppLinkModalProvider');
  }
  return context;
};

export default AppLinkModalProvider;

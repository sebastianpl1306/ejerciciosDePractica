import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;

  //Métodos
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
import { useReducer } from 'react';
import { UIContext, uiReducer } from './';
import { uiContextTypes } from '@/constants';

export interface UIState {
  sideMenuOpen: boolean
}

type UIProviderProps = {
  children: JSX.Element[] | JSX.Element
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: uiContextTypes.ACTION_TYPE_OPEN_SIDEBAR});
  }

  const closeSideMenu = () => {
    dispatch({ type: uiContextTypes.ACTION_TYPE_CLOSE_SIDEBAR});
  }

  return (
    <UIContext.Provider value={{
      ...state,
  
      //Métodos
      openSideMenu,
      closeSideMenu
    }}>
      { children }
    </UIContext.Provider>
  )
}
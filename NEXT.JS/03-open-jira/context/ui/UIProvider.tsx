import { useReducer } from 'react';
import { UIContext, uiReducer } from './';
import { uiContextTypes } from '@/constants';

export interface UIState {
  sideMenuOpen: boolean,
  isAddingEntry: boolean;
  isDragging: boolean;
}

type UIProviderProps = {
  children: JSX.Element[] | JSX.Element
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: uiContextTypes.ACTION_TYPE_OPEN_SIDEBAR});
  }

  const closeSideMenu = () => {
    dispatch({ type: uiContextTypes.ACTION_TYPE_CLOSE_SIDEBAR});
  }

  const setIsAddingEntry = (isAdding: boolean ) => {
    dispatch({ type: uiContextTypes.ACTION_TYPE_CHANGE_STATUS_ADD_ENTRY, payload: isAdding})
  }

  const startDragging = () =>{
    dispatch({ type: uiContextTypes.ACTION_TYPE_START_DRAGGING})
  }

  const endDragging = () =>{
    dispatch({ type: uiContextTypes.ACTION_TYPE_END_DRAGGING})
  }

  return (
    <UIContext.Provider value={{
      ...state,
  
      //Métodos
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging
    }}>
      { children }
    </UIContext.Provider>
  )
}
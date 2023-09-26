import { UIState } from './';
import { uiContextTypes } from '@/constants';

type UIActionType = 
| { type: uiContextTypes.ACTION_TYPE_OPEN_SIDEBAR}
| { type: uiContextTypes.ACTION_TYPE_CLOSE_SIDEBAR}

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
    switch (action.type) {
        case uiContextTypes.ACTION_TYPE_OPEN_SIDEBAR:
            return{
                ...state,
                sideMenuOpen: true
            }
        case uiContextTypes.ACTION_TYPE_CLOSE_SIDEBAR:
            return{
                ...state,
                sideMenuOpen: false
            }
        default:
            return state;
    }
}
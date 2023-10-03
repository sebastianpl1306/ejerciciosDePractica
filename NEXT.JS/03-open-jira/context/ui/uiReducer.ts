import { UIState } from './';
import { uiContextTypes } from '@/constants';

type UIActionType = 
| { type: uiContextTypes.ACTION_TYPE_OPEN_SIDEBAR}
| { type: uiContextTypes.ACTION_TYPE_CLOSE_SIDEBAR}
| { type: uiContextTypes.ACTION_TYPE_CHANGE_STATUS_ADD_ENTRY, payload: boolean }
| { type: uiContextTypes.ACTION_TYPE_START_DRAGGING }
| { type: uiContextTypes.ACTION_TYPE_END_DRAGGING }

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
        case uiContextTypes.ACTION_TYPE_CHANGE_STATUS_ADD_ENTRY:
            return{
                ...state,
                isAddingEntry: action.payload
            }
        case uiContextTypes.ACTION_TYPE_START_DRAGGING:
            return {
                ...state,
                isDragging: true
            }
        case uiContextTypes.ACTION_TYPE_END_DRAGGING:
            return {
                ...state,
                isDragging: false
            }
        default:
            return state;
    }
}
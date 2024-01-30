import { entriesContextTypes } from '@/constants';
import { EntriesState } from './';
import { Entry } from '@/interfaces';

type EntriesActionType = 
| { type: entriesContextTypes.ACTION_TYPE_ADD_ENTRY, payload: Entry}
| { type: entriesContextTypes.ACTION_TYPE_UPDATE_ENTRY, payload: Entry}
| { type: entriesContextTypes.GET_ENTRIES, payload: Entry[]}

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {
    switch (action.type) {
        case entriesContextTypes.ACTION_TYPE_ADD_ENTRY:
            return{
                ...state,
                entries: [...state.entries, action.payload]
            }
        case entriesContextTypes.ACTION_TYPE_UPDATE_ENTRY:
            return{
                ...state,
                entries: state.entries.map( entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }
        case entriesContextTypes.GET_ENTRIES:
            return{
                ...state,
                entries: [...action.payload]
            }
        default:
            return state;
    }
}
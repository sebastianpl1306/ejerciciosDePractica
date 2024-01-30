export enum uiContextTypes {
    ACTION_TYPE_OPEN_SIDEBAR = '[UI] - Open Sidebar',
    ACTION_TYPE_CLOSE_SIDEBAR = '[UI] - Close Sidebar',
    ACTION_TYPE_CHANGE_STATUS_ADD_ENTRY = '[UI] Change status add entry',
    ACTION_TYPE_START_DRAGGING = '[UI] Start Dragging',
    ACTION_TYPE_END_DRAGGING = '[UI] End Dragging',
}

export enum entriesContextTypes {
    ACTION_TYPE_ADD_ENTRY = '[Entry] Add entry',
    ACTION_TYPE_UPDATE_ENTRY = '[Entry] Update Entry',
    GET_ENTRIES = '[Entry] Get Entries',
}
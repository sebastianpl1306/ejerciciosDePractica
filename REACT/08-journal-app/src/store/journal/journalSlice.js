import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: (state, action ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;
        },
        setSaving: (state, action ) => {
            state.isSaving = true;
        },
        updateNote: (state, action ) => {
            state.isSaving = false;
            state.messageSaved = `${action.payload.title}, Nota Guardada correctamente`;
            state.notes = state.notes.map( note => {
                if (note.id == action.payload.id) return action.payload;
                return note;
            })
        },
        setPhotosToActiveNote: (state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: (state, action ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [],
            state.active = null
        },
        deleteNoteById: (state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => {
                return note.id != action.payload;
            })
        },
    }
});

export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout,
} = journalSlice.actions;
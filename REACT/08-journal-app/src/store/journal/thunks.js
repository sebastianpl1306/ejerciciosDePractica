import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../FireBase/config';

import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () =>{
    return async( dispatch, getState ) =>{
        dispatch(savingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            imageUrls: [],
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(setActiveNote(newNote));
        dispatch(addNewEmptyNote(newNote));
    }
}

export const startLoadingNotes = () =>{
    return async( dispatch, getState ) =>{
        const { uid } = getState().auth;
        if (!uid) throw new Error('UID Not Found');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
}

export const startUpdateNote = () =>{
    return async( dispatch, getState ) =>{
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        if (!uid) throw new Error('UID Not Found');

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    
        const docSaveToFireBase = {...note};
        delete docSaveToFireBase.id;

        await setDoc(docRef, docSaveToFireBase, {merge: true});
        dispatch(updateNote(note));
    }
}

export const startLoadingFiles = ( files ) =>{
    return async( dispatch, getState ) => {
        if(!files) throw new Error('Files not found');
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload( file ));
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ));
    }
}

export const startDeleteNote = () =>{
    return async(dispatch, getState) =>{
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        // const docToDelete = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        // await deleteDoc(docToDelete);

        dispatch(deleteNoteById(note.id));
    }
}
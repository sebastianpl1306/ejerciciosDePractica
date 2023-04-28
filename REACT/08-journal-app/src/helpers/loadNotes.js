import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FireBase/config';

export const loadNotes = async(uid) =>{
    if (!uid) throw new Error('UID not found');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const notesDocs = await getDocs(collectionRef);

    const notes = [];
    notesDocs.forEach( note  => {
        notes.push({id: note.id, ...note.data()})
    });

    return notes;
}
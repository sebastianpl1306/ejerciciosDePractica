import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../src/FireBase/config';

import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from '../../../src/store/journal';

describe('Pruebas en thunks journal', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(()=>jest.clearAllMocks());
    test('StartNewNote debe de crear una nueva en blanco', async() => {
        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid }});

        await startNewNote()( dispatch, getState );
        expect( dispatch ).toBeCalledWith(savingNewNote());
        expect( dispatch ).toBeCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: [],
        }));
        expect( dispatch ).toBeCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            imageUrls: [],
            id: expect.any( String ),
            date: expect.any( Number ),
        }));

        //Borra todo lo que se cargo a firebase
        const collectionRef = await collection(FirebaseDB, `${ uid }/journal/notes`);
        const docs = await getDocs( collectionRef );

        const deletePromises = [];
        docs.forEach((doc)=> deletePromises.push( deleteDoc( doc.ref )));

        await Promise.all( deletePromises );
    })
})
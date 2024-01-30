import { useEffect, useReducer } from 'react';
import { enqueueSnackbar } from 'notistack';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import { entriesContextTypes } from '@/constants';
import { entriesApi } from '@/apis';

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
}

type EntriesProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async( description: string ) =>{
    try {
      const { data } = await entriesApi.post<Entry>('/entries', {
        description
      });
  
      dispatch({ type: entriesContextTypes.ACTION_TYPE_ADD_ENTRY, payload: data});
    } catch (error) {
      throw new Error('Ocurrió un problema al insertar la entrada');
    }
  }

  const updateEntry = async( { _id, description, status }: Entry, showSnackBar = false ) =>{
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: entriesContextTypes.ACTION_TYPE_UPDATE_ENTRY, payload: data });

      if (showSnackBar ){
        enqueueSnackbar('Entrada actualizada',{
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: entriesContextTypes.GET_ENTRIES, payload: data });
  }

  useEffect(() => {
    refreshEntries();
  }, [])

  return (
    <EntriesContext.Provider value={{
      ...state,
      //métodos
      addNewEntry,
      updateEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
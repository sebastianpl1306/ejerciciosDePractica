import { useReducer } from 'react';
import { v4 as uuIdv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import { entriesContextTypes } from '@/constants';

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuIdv4(),
      description: 'Pendiente: Eos velit quia assumenda accusamus. Iusto nesciunt quia porro veritatis eaque minus et. Blanditiis harum dolorum incidunt est molestias non.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuIdv4(),
      description: 'En Progreso: Pariatur cumque libero omnis debitis rem ducimus eius. Eveniet veritatis sed quos doloremque quaerat eos dolorum voluptatem. Ea facere est dolore dolorum.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuIdv4(),
      description: 'Finalizada: Et et assumenda minus. Illum magnam est praesentium. Enim tenetur molestiae ex non dolorem autem ut eos.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}

type EntriesProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = ( description: string ) =>{
    const newEntry: Entry = {
      _id: uuIdv4(),
      description: description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: entriesContextTypes.ACTION_TYPE_ADD_ENTRY, payload: newEntry});
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      //métodos
      addNewEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
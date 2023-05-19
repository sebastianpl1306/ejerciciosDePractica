import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[],
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar la piedra del infinito',
      completed: true
    },
    {
      id: '2',
      desc: 'Recolectar la piedra del alma',
      completed: false
    },
  ],
  completed: 0,
  pending: 0
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [ TodoState, dispatch ] = useReducer(TodoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) =>{
    dispatch({ type: 'toggleTodo', payload:{ id }})
  }

  return (
    <TodoContext.Provider value={{
      TodoState,
      toggleTodo
    }}>
        { children }
    </TodoContext.Provider>
  )
}
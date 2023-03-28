import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../08-useReducer';

// const initialState = [
//     {
//         id: 1,
//         todo: 'Recolectar la gema del alma',
//         done: false
//     },
//     {
//         id: 2,
//         todo: 'Recolectar la gema del infinito',
//         done: false
//     }
// ];

const init = (initialState) =>{
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const useTodo = () => {
    const [todos, dispatchTodo] = useReducer( todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = ( todo )=>{
        const newTodo = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo(newTodo);
    }

    const handleDeleteTodo = (id) =>{
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) =>{
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=>todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
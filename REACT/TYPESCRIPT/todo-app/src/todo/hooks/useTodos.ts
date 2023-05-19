import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodos = () =>{
    const { TodoState, toggleTodo } = useContext(TodoContext);
    const { todos } = TodoState;

    return{
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed ).length,
        toggleTodo
    }
}
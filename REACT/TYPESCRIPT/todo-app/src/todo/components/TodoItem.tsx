import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"

interface props{
  todo: Todo
}

export const TodoItem = ({ todo }: props) => {
  const {toggleTodo} = useTodos();

  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
    }} onDoubleClick={() => toggleTodo(todo.id)}>
        { todo.desc }
    </li>
  )
}
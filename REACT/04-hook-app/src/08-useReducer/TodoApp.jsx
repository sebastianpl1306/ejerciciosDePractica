import { useTodo } from '../hooks/useTodo';
import { TodoAdd, TodoList } from './';
export const TodoApp = () => {
    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

  return (
    <>
        <h1>Lista de tareas</h1>
        <h3> Todos: {todosCount} pendientes: {pendingTodosCount}</h3>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}

import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { onInputChange, todotask, onResetForm } = useForm({
    todotask: ''
  });

  const onSubmit = (event) =>{
    event.preventDefault();
    const id = new Date().getTime();
    if (todotask === '') return; 
    onNewTodo({
      id,
      todo: todotask,
      done: false
    });
    onResetForm();
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            name="todotask"
            onInput={onInputChange}
            value={ todotask }
        />
        <button className="btn btn-primary mt-2" type="submit">Agregar</button>
    </form>
  )
}
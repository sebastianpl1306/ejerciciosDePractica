import { useForm } from '../../hooks/useForm';

interface FormData{
    email: string,
    nombre: string
}

export const Formulario = () => {
    const { email, nombre, formulario, handleChange } = useForm<FormData>({
        email: '',
        nombre: ''
    });

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" onChange={ handleChange } value={ email }/>
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="email" className="form-control" name="nombre" onChange={ handleChange } value={ nombre }/>
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
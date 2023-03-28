import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
    const {userForm, onInputChange, onResetForm, username, email, password} = useForm({
        username: '', 
        email: '',
        password: '',
    });

  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
        <input 
            type="text"
            className="form-control"
            placeholder="pepe32"
            name="username"
            value={ username }
            onInput={onInputChange}
        />
        { username === "pepe32" && <Message /> }

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="pepe@example.com"
            name="email"
            value={ email }
            onInput={onInputChange}
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onInput={onInputChange}
        />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Enviar</button>
    </>
  )
}

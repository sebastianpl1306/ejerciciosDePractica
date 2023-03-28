import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [userForm, setUserForm] = useState(
        {username: "pepe32", email: "pepe@example.com"}
    );

    const { username, email } = userForm;

    const onInputChange = ({target}) =>{
        const { name, value } = target;

        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    useEffect(() => {
    //   console.log("actualizando estado");
    }, [])

    useEffect(() => {
    //   console.log("actualizando formulario");
    }, [userForm])

    useEffect(() => {
    //   console.log("actualizando solo el email");
    }, [email])
    

  return (
    <>
        <h1>Simple Formulario</h1>
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
    </>
  )
}

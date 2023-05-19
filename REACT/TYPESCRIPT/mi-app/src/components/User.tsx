import { useState } from 'react';

interface User{
  uid: string;
  name: string;
}

export const User = () => {
    const [User, setUser] = useState<User>();

    const login = () =>{
        setUser({
            uid: 'ABC123',
            name: 'Sebastian Pabon Lopez'
        })
    }

  return (
    <div className="mt-5">
        <h3>Uusario</h3>
        <button className="btn btn-primary mb-2" onClick={ login }>Login</button>
        {
          (!User)
            ? <pre>No se encontro usuario</pre>
            : <pre>{ JSON.stringify( User )}</pre>
        }
    </div>
  )
}
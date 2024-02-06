import { FormEvent, useContext, useState } from 'react';
import { SocketContext } from '../context';

export const AddBand = () => {
  const [valor, setValor] = useState('');
  const { socket } = useContext( SocketContext )

  const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    if(valor.trim().length > 0 ){
      socket.emit( 'nueva-banda', {nombre: valor}  );
    }

    setValor('');
  }

  return (
    <>
        <h3>Agregar Banda</h3>
        <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Nuevo nombre de banda"
              value={valor}
              onChange={(ev) => setValor( ev.target.value )}
            />
        </form>
    </>
  )
}
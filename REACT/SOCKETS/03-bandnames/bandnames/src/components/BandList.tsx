import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Band } from '../interfaces';
import { SocketContext } from '../context';

export const BandList = () => {
  const [bands, setBands] = useState<Band[]>([]);
  const { socket } = useContext( SocketContext );

  useEffect(() => {
    socket.on('current-bands', ( data ) =>{
      setBands(data);
    })

    return () => {
      socket.off('current-bands');
    }
  }, [ socket ])

  const cambioNombre = ( event: ChangeEvent<HTMLInputElement>, id: string ) => {
    const nuevoNombre = event.target.value;

    setBands( bands => bands.map( band => {
      if(band.id === id){
        band.name = nuevoNombre;
      }

      return band
    }))
  }

  const onPerdioFoco = ( id: string, nombre: string ) =>{
    socket.emit( 'cambiar-nombre-banda', { id, nombre } );
  }

  const votar = ( id: string ) => {
    socket.emit( 'votar-banda', id );
  }

  const borrarBanda = ( id: string ) => {
    socket.emit( 'borrar-banda', id );
  }

  const createRows = () => {
    return(
      bands.map(( band ) =>(
        <tr key={band.id}>
          <td>
            <button
              className="btn btn-primary"
              onClick={ () => votar( band.id )}
            > +1 </button>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={ band.name }
              onChange={ (event) => cambioNombre( event, band.id ) }
              onBlur={ () => onPerdioFoco( band.id, band.name ) }
            />
          </td>
          <td>
            <h3> {band.votes} </h3>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => borrarBanda(band.id) }
            >Borrar</button>
          </td>
        </tr>
      ))
      
    );
  }

  return (
    <>
      <h3>Bandas Actuales</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          { createRows() }
        </tbody>
      </table>
    </>
  )
}

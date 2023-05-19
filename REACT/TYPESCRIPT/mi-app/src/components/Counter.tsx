import { useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementar = ( numero: number = 1 ):void => {
        setCounter( counter + numero);
    };

  return (
    <div className="mt-5">
        <h3>Counter: { counter }</h3>
        <br />
        <button className="btn btn-light" onClick={ () => incrementar() }>+1</button>
        <button className="btn btn-light" onClick={ () => incrementar(2) }>+2</button>
        <button className="btn btn-light" onClick={ () => setCounter(0) }>Reset</button>
    </div>
  )
}
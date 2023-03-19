import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp =  ({ value }) => {

    //El useState recibe como parametro el valor de inicialización y este se desestructura en una variable llamada counter y una función que permite modificar
    //el valor de counter
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () =>{
        // setCounter( counter + 1 );
        // setCounter(1000);
        setCounter((c)=> c + 1);
    }

    const handleSubstract = () => setCounter(counter-1);

    const handleReset = () => setCounter(value);

    return(
        <>
            <h1>counterApp</h1>
            <h2 data-testid="container-counter">{ counter }</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.prototypes = {
    value: PropTypes.number
}
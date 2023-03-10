import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp =  ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handelAdd = () =>{
        // setCounter( counter + 1 );
        // setCounter(1000);
        setCounter((c)=> c + 2000);
    }

    return(
        <>
            <h1>counterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handelAdd}>+1</button>
        </>
    )
}

CounterApp.prototypes = {
    value: PropTypes.number
}
import { useReducer } from 'react';
import { CounterState } from './interfaces';
import { counterReducer } from './state/CounterReducer';
import { doIncreaseBy, doPreviousCounter, doReset } from './actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {
  const [stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handlePrevius = () =>{
    dispatch(doPreviousCounter())
  }

  const increaseBy = ( value: number ) =>{
    dispatch(doIncreaseBy(value))
  }

  const handleReset = () =>{
    dispatch(doReset());
  }

  return (
    <>
      <h1>CounterReducer Segmentado: { stateCounter.counter }</h1>
      <pre>
        {JSON.stringify(stateCounter)}
      </pre>
      <button onClick={ handlePrevius }>Previus</button>
      <button onClick={ () => increaseBy(5) }>+1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}
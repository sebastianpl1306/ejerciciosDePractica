import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

type CounterAction = 
 | { type: 'increaseBy', payload: { value: number} }
 | { type: 'reset'}
 | { type: 'previousCounter'}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

const counterReducer = (state: CounterState, action: CounterAction): CounterState =>{
  switch (action.type) {
    case 'previousCounter':
      return{
        changes: state.changes++,
        counter: state.previous,
        previous: state.counter
      }
    case 'increaseBy':
      return {
        changes: state.changes++,
        counter: state.counter + action.payload.value,
        previous: state.counter
      };
    case 'reset':
      return{
        changes:0,
        counter: 0,
        previous: 0
      }
    default:
      return state
  }
}

export const CounterReducerComponent = () => {
  const [stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handlePrevius = () =>{
    dispatch({
      type: "previousCounter"
    })
  }

  const increaseBy = ( value: number ) =>{
    dispatch({
      type: "increaseBy",
      payload:{
        value
      }
    })
  }

  const handleReset = () =>{
    dispatch({type: "reset"});
  }

  return (
    <>
      <h1>CounterReducerComponent: { stateCounter.counter }</h1>
      <pre>
        {JSON.stringify(stateCounter)}
      </pre>
      <button onClick={ handlePrevius }>Previus</button>
      <button onClick={ () => increaseBy(5) }>+1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}
import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick} = useCounter({ maxCount: 10 });

  return (
    <>
      <h1 ref={ elementToAnimate }>CounterHook: { counter }</h1>
      <button onClick={ handleClick }>+1</button>
    </>
  )
}
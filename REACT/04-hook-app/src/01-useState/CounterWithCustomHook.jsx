import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter(5);
  return (
    <>
        <h1>Contador: {counter}</h1>
        <button className="btn btn-primary" onClick={() => increment(5)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={decrement}>-1</button>
    </>
  )
}

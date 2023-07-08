import { useState } from "react"

type PropsCounter = {
  initialValue: number;
}

type CounterState = {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue }: PropsCounter) => {
  const [{ clicks, counter }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) =>{
    setCounterState(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks++,
    }));
  }

  return (
    <>
      <h1>CounterBy: { counter }</h1>
      <h1>Clicks: { clicks }</h1>
      <button onClick={ () => handleClick(1) }>+1</button>
      <button onClick={ () => handleClick(5) }>+5</button>
    </>
  )
}
import { Counter } from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy"
import { CounterEffect } from "./bases/CounterEffect"
import { CounterHook } from "./bases/CounterHook"
import { CounterReducerComponent } from "./counter-reducer/CounterReducerComponent"

function App() {
  return (
    <>
      <h1>React</h1>
      <Counter initialValue={ 15 }/>
      <CounterBy initialValue={ 15 }/>
      <CounterEffect/>
      <CounterHook/>
      <CounterReducerComponent/>
    </>
  )
}

export default App

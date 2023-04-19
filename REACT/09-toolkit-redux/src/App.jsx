import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementBy, decrement } from './store'

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment By 2
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App

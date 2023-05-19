import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { Formulario } from './components/Formulario';
import { TimerPadre } from './components/TimerPadre';
import { User } from './components/User';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>UseState</h2>
      <Counter/>
      <User/>

      <h2>UseEffect - UseRef</h2>
      <hr />
      <TimerPadre/>

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed/>

      <h2>CustomeHooks</h2>
      <hr />
      <Formulario/>

      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App

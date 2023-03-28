import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Padre } from './07-tarea-memo/Padre';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook';
// import { SimpleForm } from './02-useEfect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer';
import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)

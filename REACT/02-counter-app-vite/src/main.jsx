import React from 'react'
import ReactDOM from "react-dom/client";
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}></CounterApp>
        {/* <FirstApp title="Hola, soy Sebastiannn" number={123}></FirstApp> */}
    </React.StrictMode>
)
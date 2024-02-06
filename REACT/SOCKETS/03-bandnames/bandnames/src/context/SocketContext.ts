import { createContext } from 'react';
import { Socket } from 'socket.io-client';

interface ContextProps {
    //Propiedades
    socket: Socket,
    online: boolean,

    //Métodos
}

export const SocketContext = createContext({} as ContextProps);
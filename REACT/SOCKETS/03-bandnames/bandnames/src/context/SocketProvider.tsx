import { useSocket } from '../hooks';
import { SocketContext } from './';

type SocketProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online } = useSocket('http://localhost:8080');

  return (
    <SocketContext.Provider value={{
      socket,
      online
    }}>
      { children }
    </SocketContext.Provider>
  )
}

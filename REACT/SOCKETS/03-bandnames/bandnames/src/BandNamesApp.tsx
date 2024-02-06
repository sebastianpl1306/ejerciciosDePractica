import { SocketProvider } from './context';
import { HomePage } from './pages';

export const BandNamesApp = () => {
  return (
    <SocketProvider>
        <HomePage/>
    </SocketProvider>
  )
}
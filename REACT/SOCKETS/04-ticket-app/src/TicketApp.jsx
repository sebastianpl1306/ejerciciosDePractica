import { BrowserRouter } from 'react-router-dom';
import { RouterPage } from './router';

export const TicketApp = () => {
  return (
    <>
      <BrowserRouter>
        <RouterPage/>
      </BrowserRouter>
    </>
  )
}
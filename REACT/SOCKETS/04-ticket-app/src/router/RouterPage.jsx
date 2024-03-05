import { Navigate, Route, Routes } from 'react-router-dom';
import { IngresarPage, ColaPage, CrearTicketPage } from '../pages';

export const RouterPage = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<IngresarPage/>}/>
            <Route path='/ingresar' element={<IngresarPage/>}/>
            <Route path='/cola' element={<ColaPage/>}/>
            <Route path='/crear' element={<CrearTicketPage/>}/>
            <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
    </>
  )
}
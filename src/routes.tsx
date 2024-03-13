import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sabores from './pages/Sabores';
import Tamanhos from './pages/Tamanhos';
import Complementos from './pages/Complementos';

const Router =() => {
  return(
    <Routes>
      <Route index path='/' element={<Sabores />} />
      <Route path='/sabores' element={<Sabores />} />
      <Route path='/tamanho' element={<Tamanhos />} />
      <Route path='/complementos' element={<Complementos />} />
    </Routes>
  )
}
 
export default Router;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sabores from './pages/Sabores';
import Tamanhos from './pages/Tamanhos';

const Router =() => {
  return(
    <Routes>
      <Route index path='/' element={<Sabores />} />
      <Route path='/sabores' element={<Sabores />} />
      <Route path='/tamanho' element={<Tamanhos />} />
    </Routes>
  )
}
 
export default Router;

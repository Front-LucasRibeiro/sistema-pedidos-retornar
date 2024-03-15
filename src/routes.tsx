import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sabores from './pages/Sabores';
import Tamanhos from './pages/Tamanhos';
import Complementos from './pages/Complementos';
import Resumo from 'pages/Resumo';

const Router =() => {
  return(
    <Routes>
      <Route  path='/' element={<Sabores />} />
      <Route index path='/sabores' element={<Sabores />} />
      <Route path='/tamanho' element={<Tamanhos />} />
      <Route path='/complementos' element={<Complementos />} />
      <Route path='/resumo' element={<Resumo />} />
    </Routes>
  )
}
 
export default Router;

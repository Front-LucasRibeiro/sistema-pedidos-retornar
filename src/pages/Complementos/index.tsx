
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import API from 'utils/config';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';
import { addOpcoes, useOpcoes } from 'store/reducers/sliceOpcoes';
// import 'pages/Complementos/style.scss';

const Tamanhos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcoes = useSelector(useOpcoes);


  console.log('complementos state', opcoes)

  // obter dados do banco 
  const getComplementos = () => {

    fetch(`${API}/complementos`)
      .then(res => res.json())
      .then(opcoes => {
        opcoes.result.map(sabor => {
          dispatch(addOpcoes(sabor));
        })
      })
  }

  useEffect(() => {
    getComplementos()
  }, [])

  return (
    <>
      <BannerTop />
      <div className='container product page-complementos'>
        <div className="product__wrap">
          <ProductInfo tipo="Açaí tradicional" />
          <ProductActions dados={opcoes} step="3/3"  />
        </div>
      </div>
    </>
  )
}

export default Tamanhos;
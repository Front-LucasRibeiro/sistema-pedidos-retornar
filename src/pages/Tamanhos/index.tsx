
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOpcoes, useOpcoes } from 'store/reducers/sliceOpcoes';

import API from 'utils/config';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';
import 'pages/Tamanhos/style.scss';

const Tamanhos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcoes = useSelector(useOpcoes);


  console.log('opcoes state', opcoes)

  // obter dados do banco 
  const getSabores = () => {

    fetch(`${API}/tamanhos`)
      .then(res => res.json())
      .then(sabores => {
        sabores.result.map(sabor => {
          dispatch(addOpcoes(sabor));
        })
      })
  }

  useEffect(() => {
    getSabores()
  }, [])

  return (
    <>
      <BannerTop />
      <div className='container product page-tamanho'>
        <div className="product__wrap">
          <ProductInfo tipo="Açaí tradicional" />
          <ProductActions dados={opcoes} step="2/3"  />
        </div>
      </div>
    </>
  )
}

export default Tamanhos;
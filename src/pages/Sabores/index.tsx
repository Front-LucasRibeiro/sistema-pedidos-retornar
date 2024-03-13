
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';

const Sabores: React.FC = () => {
  const navigate = useNavigate();
  const [dadosProduct, setDadosProduct] = useState([])

  useEffect(() => {
    navigate('/sabores');
  }, [])

  return (
    <>
      <BannerTop />
      <div className='container product'>
        <div className="product__wrap">
          <ProductInfo tipo="Açaí tradicional" />
          <ProductActions />
        </div>
      </div>
    </>
  )
}

export default Sabores;
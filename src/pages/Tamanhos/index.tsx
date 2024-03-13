
import React from 'react';

import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';

const Tamanhos: React.FC = () => {

  return (
    <>
      <BannerTop />
      <div className='container product'>
        <div className="product__wrap">
          <ProductInfo tipo="Açaí tradicional tamanho" />
          <ProductActions />
        </div>
      </div>
    </>
  )
}

export default Tamanhos;
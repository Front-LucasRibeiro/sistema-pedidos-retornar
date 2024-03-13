
import React from 'react';
import './styles.scss';
import stars from './assets/stars.jpg';

interface ProductInfoProps {
  tipo: string; // ou qualquer outro tipo específico que você espera
}

const ProductInfo: React.FC<ProductInfoProps> = ({tipo}) => {

  return (
    <div className='productInfo'>
      <h2 className='productInfo__title'>Açaí Natural</h2>

      <div className='productInfo__reviews'>
        <span className='productInfo__reviews--stars'>
          <img src={stars} alt="Estrelas de avaliação" />
        </span>
        <span className='productInfo__reviews--note'>4.5</span>
        <span className='productInfo__reviews--count'>(30+)</span>
        <span className='productInfo__reviews--link'>Ver avaliações</span>
      </div>

      <p className='productInfo__text'>
        <span>{tipo}</span> - Atenção: Contém somente açaí puro! Ideal para quem gosta de aproveitar um açaí puro ou rechear do seu jeito!
        Obs: não trocamos nem adicionamos itens a esse copo!
      </p>
    </div>
  )
}

export default ProductInfo;
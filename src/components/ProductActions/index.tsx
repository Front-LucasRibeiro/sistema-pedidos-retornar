
import React, { useState } from 'react';
import './styles.scss';

interface ProductActionsProps {
  dados: object; // ou qualquer outro tipo específico que você espera
  step: string;
}

const ProductActions: React.FC<ProductActionsProps> = ({ dados, step }) => {

  return (
    <div className='productActions'>
      <div className="productActions__steps">
        <h3>Escolha uma fruta</h3>
        <p>Escolha pelo menos 1 opção.</p>
        <div className="productActions__steps--step">{step}</div>
      </div>
      <form>
        {
          dados['opcoes'].map(sabor => {
            return (
              <div className='productActions__optionItem'>
                <label htmlFor={sabor.name.toLowerCase()} className="chk productActions__option">
                  <div className="productActions__option--item">
                    <img src={'assets/' + sabor.name.toLowerCase() + '.jpg'} alt={sabor.name} />
                    {sabor.name}
                  </div>
                  <div className="productActions__option--check">
                    <div className="productActions__option--price">
                      R${sabor.price}
                    </div>
                    <div className="productActions__option--input">
                      <input type="checkbox" id={sabor.name.toLowerCase()} />
                      <span></span>
                    </div>
                  </div>
                </label>
              </div>
            )
          })
        }
      </form>
    </div>
  )
}

export default ProductActions;

import React from 'react';
import './styles.scss';

const ProductActions: React.FC = () => {

  return (
    <div className='productActions'>
      <div className="productActions__steps">
        <h3>Escolha uma fruta</h3>
        <p>Escolha pelo menos 1 opção.</p>
        <div className="productActions__step">1/3</div>
      </div>
      <form>
        <div className="productActions__option">
          <div className="productActions__option--item">
            <img src="" alt="" />
            Banana
          </div>
          <div className="productActions__option--check">
            <div className="productActions__option--price">
              +R$0
            </div>
            <div className="productActions__option--input">
              <input type="checkbox" /> 
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductActions;
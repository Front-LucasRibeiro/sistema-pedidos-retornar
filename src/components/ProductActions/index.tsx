
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotal, useTotal } from 'store/reducers/slicePedidoTotal';
import './styles.scss';

interface ProductActionsProps {
  dados: object;
  step: string;
  titulo: string;
  subTitulo: string;
  register: any;
}

const ProductActions: React.FC<ProductActionsProps> = ({ dados, step, titulo, subTitulo, register }) => {
  const tipo = Object.keys(dados)[0];
  const dispatch = useDispatch();
  const total = useSelector(useTotal);
  const [totalAnt, setTotalAnt] = useState(total['total'][0])

  // console.log('tipo', tipo)

  // console.log('ProductActions dados', dados)

  let listCheckedsPrice = []

  const setTotal = () => {
    let totalValue = totalAnt

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox instanceof HTMLInputElement) {
        if (checkbox.checked) {
          listCheckedsPrice.push(Number(checkbox.dataset.price))
        }
      }
    });

    if (totalValue) {
      listCheckedsPrice.push(totalValue)
    }
    let sum = listCheckedsPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    dispatch(addTotal(sum));
  }

  return (
    <div className='productActions'>
      <div className="productActions__steps">
        <h3>{titulo}</h3>
        <p>{subTitulo}</p>
        <div className="productActions__steps--step">{step}</div>
      </div>
      <div>
        {
          dados[tipo].map(sabor => {
            return (
              <div className='productActions__optionItem'>
                <label htmlFor={sabor.name.toLowerCase()} className="chk productActions__option">
                  <div className="productActions__option--item">
                    <img src={'assets/' + sabor.name.replace('ç', 'c').replace(' ', '-').toLowerCase() + '.jpg'} alt={sabor.name} />
                    {sabor.name}
                  </div>
                  <div className="productActions__option--check">
                    <div className="productActions__option--price">
                      R${sabor.price}
                    </div>
                    <div className="productActions__option--input">
                      <input
                        type="checkbox"
                        value={sabor.name}
                        data-price={sabor.price}
                        id={sabor.name.toLowerCase()}
                        {...register(tipo)}
                        onClick={setTotal}
                      />
                      <span></span>
                    </div>
                  </div>
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductActions;

import React, { useEffect, useState } from 'react';
import { Link, useResolvedPath } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addTotal, useTotal } from 'store/reducers/slicePedidoTotal';
import './styles.scss';

interface FixedMenuProps {
  erros: any;
}

const FixedMenu: React.FC<FixedMenuProps> = ({erros}) => {
  const totalVal = useSelector(useTotal);
  const [total, setTotal] = useState('R$ 0,00')
  const [quantidade, setQuantidade] = useState(1);


  const handleChange = (event) => {
    setQuantidade(parseInt(event.target.value));
  };

  useEffect(() => {
    if(totalVal['total'].length !== 0){
      setTotal(totalVal['total'][0].toLocaleString("pt-BR", {style: "currency" , currency:"BRL"} ))
    }
  },[totalVal])

  return (
    <div className='menuActions'>
      <span className='menuActions__erros'>{erros}</span>
      <div>
        <input type="number" className='menuActions__inputQtd' min="1" disabled value={quantidade} onChange={handleChange}/>
        <button className='menuActions__button'>Avançar <span className='menuActions__price'>{total}</span></button>
      </div>
      <div className='menuActions__pedidos'>
        <Link to={`/resumo`} className='menuActions__button'>Ver meus pedidos</Link>
      </div>
    </div>
  )
}

export default FixedMenu;
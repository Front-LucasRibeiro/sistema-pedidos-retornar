
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotal, useTotal } from 'store/reducers/slicePedidoTotal';
import API from 'utils/config';
import { useComplemento } from 'store/reducers/slicePedidoComplementos';
import { useSabores } from 'store/reducers/slicePedidoSabores';
import { useTamanho } from 'store/reducers/slicePedidoTamanho';
import bannerTop from './assets/banner-top.jpg';
import './styles.scss';


const Resumo: React.FC = () => {
  const complemento = useSelector(useComplemento);
  const sabores = useSelector(useSabores);
  const tamanho = useSelector(useTamanho);
  const totalValor = useSelector(useTotal);
  const [dados, setDados] = useState([])

  console.log('complemento', complemento['complemento'][0])
  console.log('sabores', sabores['sabores'][0])
  console.log('tamanho', tamanho['tamanho'][0])
  console.log('total', totalValor['total'][0])

  const postPedido = () => {

    if(tamanho['tamanho'][0] && sabores['sabores'][0]){

      let body = {
        "quantidade": 1,
        "tamanho": tamanho['tamanho'][0],
        "sabores": sabores['sabores'][0],
        "complementos": complemento['complemento'][0],
        "total": totalValor['total'][0],
        "entregaPrevisao": "",
      }
  
      fetch(`${API}/pedidos`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(response => response.json())
        .then(data => {
          console.log('foi no resumo', data)
        })
    }
  }

  const getResumo = () => {
    let listaTemp = []

    fetch(`${API}/pedidos`)
      .then(res => res.json())
      .then(res => {

        res.map(item => {
          listaTemp.push({
            quantidade: item.quantidade,
            tamanho: item.tamanho.join(','),
            sabores: item.sabores.join(','),
            complementos: item.complementos.join(','),
            total: item.total,
            id: item.id
          })
        })
        setDados(listaTemp)
      })
  }

  useEffect(() => {
    postPedido()

    setTimeout(function(){
      getResumo()
    },1000)
  }, [])

  return (
    <div className='container resumo'>
      <h2>Meus Pedidos</h2>
      <h3>Pedidos Ativos</h3>

      <ul className='resumo__lista'>
        {
          dados.map((item, index) => (
            <li className='resumo__wrap'>
              <span className='resumo__item--id'>#{item.id}</span>
              <div className='resumo__item'>
                <div className='resumo__item--foto'>
                  <img src={bannerTop} alt="Açaí Natural" />
                </div>
                <div className='resumo__item--info'>
                  <h4>Açaí Natural</h4>
                  <p><span>Quantidade:</span> {item.quantidade}</p>
                  <p><span>Tamanho:</span> {item.tamanho}</p>
                  <p><span>Sabor:</span> {item.sabores}</p>
                  <p><span>Complemento:</span> {item.complementos}</p>
                </div>
              </div>
              <div className='resumo__footer'>
                <span>Valor Total:</span> {item.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </div>
            </li>
          ))
        }
        
      </ul>

    </div>
  )
}

export default Resumo;
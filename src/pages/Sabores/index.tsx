
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOpcoes, useOpcoes } from 'store/reducers/sliceOpcoesSabores';
import { addSabores, useSabores } from 'store/reducers/slicePedidoSabores';
import { addTotal, useTotal } from 'store/reducers/slicePedidoTotal';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import API from 'utils/config';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';
import FixedMenu from 'components/FixedMenu';

const createItemFormShema = z.object({
  opcoes: z.array(z.string()).min(1, 'É necessário selecionar pelo menos 1 opção para avançar!')
})

type CreateSaborFormData = z.infer<typeof createItemFormShema>

const Sabores: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcoes = useSelector(useOpcoes);

  const { register, handleSubmit, formState: { errors } } = useForm<CreateSaborFormData>({
    resolver: zodResolver(createItemFormShema),
    defaultValues: {
      opcoes: [],
    },
    mode: "onChange",
  })

  // salva dados no state
  const salvar = (data: any) => {
    dispatch(addSabores(data.opcoes));
    navigate('/tamanho');
  }

  // obter dados do banco 
  const getSabores = () => {
    fetch(`${API}/sabores`)
      .then(res => res.json())
      .then(sabores => {
        sabores.result.map(sabor => {
          dispatch(addOpcoes(sabor));
        })
      })
  }


  useEffect(() => {
    navigate('/sabores');
    getSabores()
  }, [])

  return (
    <>
      <BannerTop />
      <form onSubmit={handleSubmit(salvar)}>
        <div className='container product'>
          <div className="product__wrap">
            <ProductInfo tipo="Açaí tradicional" />
            <ProductActions
              dados={opcoes}
              step="1/3"
              titulo="Escolha uma fruta"
              subTitulo="Escolha pelo menos 1 opção."
              register={register}
            />
          </div>
        </div>
        <div className='container'>
          {errors.opcoes ? (
            <FixedMenu erros={errors.opcoes.message} />
          ) : (
            <FixedMenu erros="" />
          )}
        </div>
      </form>
    </>
  )
}

export default Sabores;
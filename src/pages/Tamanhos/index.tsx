import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOpcoesTamanho, useOpcoesTamanho } from 'store/reducers/sliceOpcoesTamanho';
import { addTamanho, useTamanho } from 'store/reducers/slicePedidoTamanho';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import API from 'utils/config';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';
import FixedMenu from 'components/FixedMenu';
import { useSabores } from 'store/reducers/slicePedidoSabores';
import 'pages/Tamanhos/style.scss';

const createItemFormShema = z.object({
  opcoesTamanho: z.array(z.string())
    .min(1, 'É necessário selecionar pelo menos 1 opção para avançar!')
    .max(1, 'É necessário selecionar apenas 1 tamanho para avançar!')
})

type CreateTamanhoFormData = z.infer<typeof createItemFormShema>

const Tamanhos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcoesTamanho = useSelector(useOpcoesTamanho);
  const sabores = useSelector(useSabores);

  const { register, handleSubmit, formState: { errors } } = useForm<CreateTamanhoFormData>({
    resolver: zodResolver(createItemFormShema),
    defaultValues: {
      opcoesTamanho: [],
    },
    mode: "onChange",
  })

  const salvar = (data: any) => {
    dispatch(addTamanho(data.opcoesTamanho));
    navigate('/complementos');
  }

  // obter dados do banco 
  const getTamanhos = () => {

    fetch(`${API}/tamanhos`)
      .then(res => res.json())
      .then(tamanhos => {
        tamanhos.result.map(tamanho => {
          dispatch(addOpcoesTamanho(tamanho));
        })
      })
  }

  useEffect(() => {
    getTamanhos()

    if(sabores['sabores'].length === 0){
      navigate('/sabores')
    }
  }, [])

  return (
    <>
      <BannerTop />
      <form onSubmit={handleSubmit(salvar)}>
        <div className='container product page-tamanho'>
          <div className="product__wrap">
            <ProductInfo tipo="Açaí tradicional" />
            <ProductActions dados={opcoesTamanho} step="2/3" titulo="Escolha o tamanho" subTitulo="Escolha pelo menos 1 opção." register={register} />
          </div>
        </div>
        <div className='container'>
          {errors.opcoesTamanho ? (
            <FixedMenu erros={errors.opcoesTamanho.message} />
          ) : (
            <FixedMenu erros="" />
          )}
        </div>
      </form>
    </>
  )
}

export default Tamanhos;
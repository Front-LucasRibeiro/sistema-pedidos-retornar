import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOpcoesComplemento, useOpcoesComplemento } from 'store/reducers/sliceOpcoesComplementos';
import { useForm } from 'react-hook-form';
import { any, boolean, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import API from 'utils/config';
import BannerTop from 'components/BannerTop';
import ProductInfo from 'components/ProductInfo';
import ProductActions from 'components/ProductActions';
import FixedMenu from 'components/FixedMenu';
import { addComplemento } from 'store/reducers/slicePedidoComplementos';
import { useSabores } from 'store/reducers/slicePedidoSabores';
import { useTamanho } from 'store/reducers/slicePedidoTamanho';
import 'pages/Complementos/style.scss';

const createItemFormShema = z.object({
  opcoesComplemento: any()
})

type CreateComplementoFormData = z.infer<typeof createItemFormShema>


const Complementos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcoes = useSelector(useOpcoesComplemento);
  const sabores = useSelector(useSabores);
  const tamanho = useSelector(useTamanho);
  

  const { register, handleSubmit, formState: { errors } } = useForm<CreateComplementoFormData>({
    resolver: zodResolver(createItemFormShema),
    defaultValues: {
      opcoesComplemento: [],
    },
    mode: "onChange",
  })

  const salvar = (data: any) => {
    if (data.opcoesComplemento) {
      dispatch(addComplemento(data.opcoesComplemento));
      navigate('/resumo');
    } 
  }

  // obter dados do banco 
  const getComplementos = () => {
    fetch(`${API}/complementos`)
      .then(res => res.json())
      .then(opcoes => {
        opcoes.result.map(opcao => {
          dispatch(addOpcoesComplemento(opcao));
        })
      })
  }

  useEffect(() => {
    getComplementos()

    // em caso de recarregar a pagina e perder o state volta ao inicio
    if (sabores['sabores'].length === 0 || tamanho['tamanho'].length === 0) {
      navigate('/sabores')
    }
  }, [])

  return (
    <>
      <BannerTop />
      <form onSubmit={handleSubmit(salvar)} className='page-complementos'>
        <div className='container product page-complementos'>
          <div className="product__wrap">
            <ProductInfo tipo="Açaí tradicional" />
            <ProductActions dados={opcoes} step="3/3" titulo="Escolha complementos" subTitulo="Escolha até 3 opções." register={register} />
          </div>
        </div>
        <div className='container'>
          {errors.opcoesComplemento ? (
            <FixedMenu erros={errors.opcoesComplemento.message} />
          ) : (
            <FixedMenu erros="" />
          )}
        </div>
      </form>
    </>
  )
}

export default Complementos;
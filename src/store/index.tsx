import { configureStore } from "@reduxjs/toolkit";

import sliceOpcoesSabores from './reducers/sliceOpcoesSabores';
import slicePedidoSabores from "./reducers/slicePedidoSabores";
import sliceOpcoesTamanho from './reducers/sliceOpcoesTamanho';
import slicePedidoTamanho from "./reducers/slicePedidoTamanho";
import sliceOpcoesComplementos from "./reducers/sliceOpcoesComplementos";
import slicePedidoComplementos from "./reducers/slicePedidoComplementos";
import slicePedidoTotal from "./reducers/slicePedidoTotal";


const store = configureStore({
  reducer: {
    opcoes: sliceOpcoesSabores,
    opcoesTamanho: sliceOpcoesTamanho,
    opcoesComplemento: sliceOpcoesComplementos,
    sabores: slicePedidoSabores,
    tamanho: slicePedidoTamanho,
    complemento: slicePedidoComplementos,
    total: slicePedidoTotal
  },
});

export default store;

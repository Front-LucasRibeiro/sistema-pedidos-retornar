import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpcoesComplementoState {
  opcoesComplemento: { name: string; price: number }[];
}

const initialState: OpcoesComplementoState = {
  opcoesComplemento: [],
};

const opcoesSliceComplemento = createSlice({
  name: 'opcoesComplemento',
  initialState,
  reducers: {
    addOpcoesComplemento: (state, action: PayloadAction<{ name: string; price: number }>) => {
      const { name, price } = action.payload;
      
      // Verificar se a opção já existe
      const opcaoExistente = state.opcoesComplemento.find(opcao => opcao.name === name);

      if (!opcaoExistente) {
        state.opcoesComplemento.push({ name, price });
      }
    },
  },
});

export const { addOpcoesComplemento } = opcoesSliceComplemento.actions;
export default opcoesSliceComplemento.reducer;


export const useOpcoesComplemento = (state: any) => {
  return state.opcoesComplemento as OpcoesComplementoState[];
}
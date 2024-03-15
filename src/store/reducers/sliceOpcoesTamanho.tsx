import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpcoesTamanhoState {
  opcoesTamanho: { name: string; price: number }[];
}

const initialState: OpcoesTamanhoState = {
  opcoesTamanho: [],
};

const opcoesSliceTamanho = createSlice({
  name: 'opcoesTamanho',
  initialState,
  reducers: {
    addOpcoesTamanho: (state, action: PayloadAction<{ name: string; price: number }>) => {
      const { name, price } = action.payload;
      
      // Verificar se a opção já existe
      const opcaoExistente = state.opcoesTamanho.find(opcao => opcao.name === name);

      if (!opcaoExistente) {
        state.opcoesTamanho.push({ name, price });
      }
    },
  },
});

export const { addOpcoesTamanho } = opcoesSliceTamanho.actions;
export default opcoesSliceTamanho.reducer;


export const useOpcoesTamanho = (state: any) => {
  return state.opcoesTamanho as OpcoesTamanhoState[];
}
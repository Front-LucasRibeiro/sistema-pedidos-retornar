import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpcoesState {
  opcoes: { name: string; price: number }[];
}

const initialState: OpcoesState = {
  opcoes: [],
};

const opcoesSlice = createSlice({
  name: 'opcoes',
  initialState,
  reducers: {
    addOpcoes: (state, action: PayloadAction<{ name: string; price: number }>) => {
      const { name, price } = action.payload;
      
      // Verificar se a opção já existe
      const opcaoExistente = state.opcoes.find(opcao => opcao.name === name);

      if (!opcaoExistente) {
        state.opcoes.push({ name, price });
      }
    },
  },
});

export const { addOpcoes } = opcoesSlice.actions;
export default opcoesSlice.reducer;

export const useOpcoes = (state: any) => {
  return state.opcoes as OpcoesState[];
}

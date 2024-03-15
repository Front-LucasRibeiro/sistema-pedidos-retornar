import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface tamanhoState {
  tamanho: { name: string; price: number }[];
}

const initialState: tamanhoState = {
  tamanho: [],
};

const tamanhoSlice = createSlice({
  name: 'tamanho',
  initialState,
  reducers: {
    addTamanho: (state, action: PayloadAction<{ name: string; price: number }>) => {
      if (state.tamanho.length > 0) {
        state.tamanho[0] = action.payload;
      } else {
        state.tamanho.push(action.payload);
      }
    },
  },
});

export const { addTamanho } = tamanhoSlice.actions;
export default tamanhoSlice.reducer;

export const useTamanho = (state: any) => {
  return state.tamanho as tamanhoState[];
}

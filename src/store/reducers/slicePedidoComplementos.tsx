import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface complementoState {
  complemento: { name: string; price: number }[];
}

const initialState: complementoState = {
  complemento: [],
};

const complementoSlice = createSlice({
  name: 'complemento',
  initialState,
  reducers: {
    addComplemento: (state, action: PayloadAction<{ name: string; price: number }>) => {
      if (state.complemento.length > 0) {
        state.complemento[0] = action.payload;
      } else {
        state.complemento.push(action.payload);
      }
    },
  },
});

export const { addComplemento } = complementoSlice.actions;
export default complementoSlice.reducer;

export const useComplemento = (state: any) => {
  return state.complemento as complementoState[];
}

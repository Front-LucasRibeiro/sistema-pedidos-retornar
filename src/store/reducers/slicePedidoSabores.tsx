import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface saboresState {
  sabores: { name: string; price: number }[];
}

const initialState: saboresState = {
  sabores: [],
};

const saboresSlice = createSlice({
  name: 'sabores',
  initialState,
  reducers: {
    addSabores: (state, action: PayloadAction<{ name: string; price: number }>) => {
      if (state.sabores.length > 0) {
        state.sabores[0] = action.payload;
      } else {
        state.sabores.push(action.payload);
      }
    },
  },
});

export const { addSabores } = saboresSlice.actions;
export default saboresSlice.reducer;

export const useSabores = (state: any) => {
  return state.sabores as saboresState[];
}

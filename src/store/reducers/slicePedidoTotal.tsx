import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface totalState {
  total: { total: number }[];
}

const initialState: totalState = {
  total: [],
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    addTotal: (state, action: PayloadAction<{ total: number; }>) => {
      if (state.total.length > 0) {
        state.total[0] = action.payload;
      } else {
        state.total.push(action.payload);
      }
    },
  },
});

export const { addTotal } = totalSlice.actions;
export default totalSlice.reducer;

export const useTotal = (state: any) => {
  return state.total as totalState[];
}

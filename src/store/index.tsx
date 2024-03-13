import { configureStore } from "@reduxjs/toolkit";
import sliceOpcoes from './reducers/sliceOpcoes';


const store = configureStore({
  reducer: {
    opcoes: sliceOpcoes,
  },
});

export default store;

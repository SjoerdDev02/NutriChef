import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes';
import modalReducer from './modal';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
      recipes: recipesReducer,
      modal: modalReducer,
      cart: cartReducer,
  },
});
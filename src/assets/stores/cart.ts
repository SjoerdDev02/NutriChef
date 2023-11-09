import { CartItemType } from "../types/CartType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: CartItemType[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItemType>) => {
      const existingItem = state.cart.find((cartItem) => cartItem.title === action.payload.title);
      if (existingItem) {
        state.cart = state.cart.map((cartItem) =>
          cartItem.title === action.payload.title ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    incrementCart: (state, action: PayloadAction<CartItemType>) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.title === action.payload.title ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
      );
    },
    decrementCart: (state, action: PayloadAction<CartItemType>) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.title === action.payload.title ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem
      );
      state.cart = state.cart.filter((cartItem) => cartItem.amount !== 0);
    },
  },
});

export const { setCart, incrementCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../products/productTypes";

export interface CartProduct {
  product: Product;
  quantity: number;
}
interface CartState {
  cartItems: Record<number, CartProduct>;
}
const initialState: CartState = {
  cartItems: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; product: Product; quantity?: number }>
    ) => {
      const { id, product, quantity = 1 } = action.payload;
      state.cartItems[id] = { product, quantity };
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      delete state.cartItems[action.payload];
    },
  },
});

export const { changeQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

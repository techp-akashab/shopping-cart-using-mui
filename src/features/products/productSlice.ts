import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productTypes";
import { AppDispatch } from "../../store/store";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const fetchProducts = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json: Product[] = await res.json();
      dispatch(setProducts(json));
    } catch (error) {
      console.error("Error Fetching Products", error);
    }
  };
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

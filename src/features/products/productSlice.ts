import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productTypes";
import { AppDispatch } from "../../store/store";

interface ProductState {
  products: Product[];
  product: Product | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

export const fetchProducts = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
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
    getProduct(state, action: PayloadAction<number>) {
      state.product =
        state.products.find((obj) => (obj.id === action.payload)) || null;
    },
  },
});
export const { setProducts, getProduct } = productSlice.actions;
export default productSlice.reducer;

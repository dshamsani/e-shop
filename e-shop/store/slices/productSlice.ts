import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IProductitem } from "../../Interfaces/IProductItem";

export interface ICountState {
  productId: number;
  productCount: number;
  productMethod: "con" | "nocon" | "add" | "remove";
}

export interface IProductState {
  data: Array<IProductitem>;
  productCount: Array<ICountState>;
}

const initialState: IProductState = {
  data: [],
  productCount: [],
};

export const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<IProductitem>) {
      state.data.push(action.payload);
    },
    updateProductData(state, action: PayloadAction<number>) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateProductCount(state, action: PayloadAction<number>) {
      state.productCount = state.productCount.filter((item) => item.productId !== action.payload);
    },
    clear(state) {
      state.data = [];
      state.productCount = [];
    },
    counter(state, action: PayloadAction<ICountState>) {
      switch (action.payload.productMethod) {
        case "nocon":
          state.productCount.push(action.payload);
          break;
        case "con":
          state.productCount.map((item) => {
            if (item.productId == action.payload.productId) {
              item.productCount += action.payload.productCount;
            }
          });
          break;
        case "add":
          state.productCount.map((item) => {
            if (item.productId == action.payload.productId) {
              item.productCount += 1;
            }
          });
          break;
        case "remove":
          state.productCount.map((item) => {
            if (item.productId == action.payload.productId) {
              item.productCount -= 1;
            }
          });
          break;
        default:
          break;
      }
    },
  },
});

export const { increment, clear, counter, updateProductData, updateProductCount } = productSlice.actions;

export default productSlice.reducer;

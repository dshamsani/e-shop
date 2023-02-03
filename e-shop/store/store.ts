import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import { loadState } from "../utils/browser-storage";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];

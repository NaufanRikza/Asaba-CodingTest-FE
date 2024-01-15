import { configureStore } from "@reduxjs/toolkit";
import createProductsReducer from "./slice/product/createProductsSlice";
import fetchProductsReducer from "./slice/product/fetchProductsSlice";
import updateProductsReducer from "./slice/product/updateProductsSlice";
import selectedTableReducer from "./slice/table/tableSlice";
import formReducer from "./slice/form/fromSlice";
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    createProducts: createProductsReducer,
    fetchProducts: fetchProductsReducer,
    updateProducts: updateProductsReducer,
    form: formReducer,
    selectedTable: selectedTableReducer,
  },
});

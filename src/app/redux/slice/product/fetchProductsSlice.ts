import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IProductAttributes,
  IProductSResponse,
} from "../../../../data/interface/product.interface";
import { AxiosError } from "axios";
import { getProducts } from "../../../../api/product/getProduct";

interface IGetProductsState {
  apiStatus: "idle" | "pending" | "done" | "rejected";
  resp: IProductSResponse | unknown;
  products: IProductAttributes[];
}

const initialState: IGetProductsState = {
  apiStatus: "idle",
  resp: {},
  products: [],
};

export const fetchProducts = createAsyncThunk<
  IProductSResponse,
  undefined,
  { rejectValue: IProductSResponse }
>("getProductsSlice/get", async (_, thunkApi) => {
  try {
    const res = await getProducts();
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response) {
        return thunkApi.rejectWithValue({
          statusCode: e.response.status,
          message: e.response?.data.message,
        });
      } else if (e.request) {
        return thunkApi.rejectWithValue({
          message: e.code!,
        });
      }
    }
    return thunkApi.rejectWithValue({
      statusCode: 500,
      message: (e as Error).message,
    });
  }
});

const fetchProductsSlice = createSlice({
  name: "createProductsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.apiStatus = "done";
      state.resp = action.payload;
      state.products = action.payload.data as IProductAttributes[];
    });

    builder.addCase(fetchProducts.pending, (state) => {
      state.apiStatus = "pending";
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.apiStatus = "rejected";
    });
  },
});

export default fetchProductsSlice.reducer;

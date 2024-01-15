import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IProductAttributes,
  IProductSResponse,
} from "../../../../data/interface/product.interface";
import { AxiosError } from "axios";
import { bulkUpdateProducts } from "../../../../api/product/updateProduct";

interface IUpdateProductsState {
  apiStatus: "idle" | "pending" | "done" | "rejected";
  resp: IProductSResponse | unknown;
}

const initialState: IUpdateProductsState = {
  apiStatus: "idle",
  resp: {},
};

export const updateProducts = createAsyncThunk<
  IProductSResponse,
  IProductAttributes[],
  { rejectValue: IProductSResponse }
>("updateProductsSlice/put", async (input, thunkApi) => {
  try {
    const res = await bulkUpdateProducts(input);
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

const createProductsSlice = createSlice({
  name: "updateProductsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      state.apiStatus = "done";
      state.resp = action.payload;
    });

    builder.addCase(updateProducts.pending, (state) => {
      state.apiStatus = "pending";
    });

    builder.addCase(updateProducts.rejected, (state, action) => {
      state.apiStatus = "rejected";
      state.resp = action.payload;
    });
  },
});

export default createProductsSlice.reducer;

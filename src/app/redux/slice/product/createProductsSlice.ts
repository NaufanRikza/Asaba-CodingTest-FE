import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IProductCreationAttributes,
  IProductSResponse,
} from "../../../../data/interface/product.interface";
import { AxiosError } from "axios";
import { bulkCreateProducts } from "../../../../api/product/createProduct";

interface ICreateProductsState {
  apiStatus: "idle" | "pending" | "done" | "rejected";
  resp: IProductSResponse | unknown;
}

const initialState: ICreateProductsState = {
  apiStatus: "idle",
  resp: {},
};

export const createProducts = createAsyncThunk<
  IProductSResponse,
  IProductCreationAttributes[],
  { rejectValue: IProductSResponse }
>("createProductsSlice/post", async (input, thunkApi) => {
  try {
    const res = await bulkCreateProducts(input);
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
  name: "createProductsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.apiStatus = "done";
      state.resp = action.payload;
    });

    builder.addCase(createProducts.pending, (state) => {
      state.apiStatus = "pending";
    });

    builder.addCase(createProducts.rejected, (state, action) => {
      state.apiStatus = "rejected";
      state.resp = action.payload;
    });
  },
});

export default createProductsSlice.reducer;

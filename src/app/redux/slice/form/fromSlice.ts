import { createSlice } from "@reduxjs/toolkit";
import { IProductCreationAttributes } from "../../../../data/interface/product.interface";

interface IFormSliceState {
  isCreateSubmit: boolean;
  formData: IProductCreationAttributes[];
  formLength: number;
}

const initialState: IFormSliceState = {
  isCreateSubmit: false,
  formData: [],
  formLength: 1,
};

const formSlice = createSlice({
  name: "createProductsSlice",
  initialState,
  reducers: {
    setIsCreateSubmit(state, action) {
      state.isCreateSubmit = action.payload;
    },
    setFormLength(state, action) {
      state.formLength = action.payload;
    },
    setFormData(state, action) {
      state.formData.push(action.payload);
    },
    resetFormData(state) {
      state.isCreateSubmit = false;
      state.formData = [];
      state.formLength = 1;
    },
  },
});

export const { setIsCreateSubmit, setFormData, setFormLength, resetFormData } =
  formSlice.actions;
export default formSlice.reducer;

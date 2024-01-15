import { createSlice } from "@reduxjs/toolkit";
import { IProductAttributes } from "../../../../data/interface/product.interface";

interface ITableSliceState {
  selectedTable: IProductAttributes[];
}

const initialState: ITableSliceState = {
  selectedTable: [],
};

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    setSelectedTable(state, action) {
      state.selectedTable.push(action.payload);
    },
    removeSelectedTable(state, action) {
      const temp = [...state.selectedTable];
      temp.splice(action.payload, 1);
      state.selectedTable = temp;
    },
    resetSelectedTable(state) {
      state.selectedTable = [];
    },
  },
});

export const { setSelectedTable, removeSelectedTable, resetSelectedTable } =
  tableSlice.actions;
export default tableSlice.reducer;

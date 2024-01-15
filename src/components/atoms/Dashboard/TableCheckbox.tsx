import { Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../app/redux/store";
import {
  removeSelectedTable,
  setSelectedTable,
} from "../../../app/redux/slice/table/tableSlice";

interface ITableCheckBoxProps {
  code: string;
}
export default function TableChecbox(props: ITableCheckBoxProps) {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: AppState) => state.fetchProducts.products
  );
  const selectedTable = useSelector(
    (state: AppState) => state.selectedTable.selectedTable
  );
  const onChecboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(
        setSelectedTable(
          products.find((product) => {
            return product.code === props.code;
          })
        )
      );
    } else {
      dispatch(
        removeSelectedTable(
          selectedTable.findIndex((product) => {
            return product.code === props.code;
          })
        )
      );
    }
  };
  return <Checkbox onChange={onChecboxChange} />;
}

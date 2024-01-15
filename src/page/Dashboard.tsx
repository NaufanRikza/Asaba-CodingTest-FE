import { HStack, Heading, VStack } from "@chakra-ui/react";
import ProductTable from "../components/molecule/Dashboard/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../app/redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../app/redux/slice/product/fetchProductsSlice";
import ButtonGroup from "../components/molecule/Dashboard/ButtonGroup";

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: AppState) => state.fetchProducts.products
  );
  useEffect(() => {
    dispatch(fetchProducts()).then((data) => console.log(data));
  }, [dispatch]);

  return (
    <VStack w={"full"} p={"1rem"} align={"start"} h={"full"} spacing={"1rem"}>
      <HStack w={"full"} justify={"space-between"}>
        <Heading fontSize={"24px"}>Product List</Heading>
        <ButtonGroup />
      </HStack>
      <ProductTable data={products} />
    </VStack>
  );
}

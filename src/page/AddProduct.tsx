import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import FormGroup from "../components/organism/AddProduct/FormGroup";
import { MdAdd } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../app/redux/store";
import {
  setFormLength,
  setIsCreateSubmit,
} from "../app/redux/slice/form/fromSlice";

export default function AddProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const formLength = useSelector((state: AppState) => state.form.formLength);
  const apiState = useSelector(
    (state: AppState) => state.createProducts.apiStatus
  );
  const onAdd = () => dispatch(setFormLength(formLength + 1));
  const onSubmit = () => dispatch(setIsCreateSubmit(true));
  return (
    <VStack w={"full"} p={"1rem"} align={"start"} h={"full"} spacing={"1rem"}>
      <Heading fontSize={"24px"}>Tambah Produk</Heading>
      <FormGroup />
      <HStack>
        <Button
          onClick={onAdd}
          borderRadius={"full"}
          bg={"#278CB9"}
          color={"white"}
        >
          <HStack>
            <MdAdd />
            <Text>Tambah Produk</Text>
          </HStack>
        </Button>
        <Button
          onClick={onSubmit}
          isLoading={apiState === "pending"}
          borderRadius={"full"}
          bg={"#278CB9"}
          color={"white"}
        >
          Buat Produk
        </Button>
      </HStack>
    </VStack>
  );
}

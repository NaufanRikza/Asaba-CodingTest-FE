import { Heading, VStack, useToast } from "@chakra-ui/react";
import AddProductForm from "../../molecule/AddProduct/AddProductForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../app/redux/store";
import { useEffect } from "react";
import { createProducts } from "../../../app/redux/slice/product/createProductsSlice";
import { resetFormData } from "../../../app/redux/slice/form/fromSlice";

export default function FormGroup() {
  const formLength = useSelector((state: AppState) => state.form.formLength);
  const formData = useSelector((state: AppState) => state.form.formData);
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  useEffect(() => {
    if (formData.length != formLength || formData.length === 0) {
      return;
    }
    dispatch(createProducts(formData)).then((data) => {
      dispatch(resetFormData());
      toast({
        position: "top",
        duration: 3000,
        title: "Create Product",
        description: data.payload?.message,
        status: data.payload?.message.includes("error") ? "error" : "success",
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, dispatch]);

  return (
    <VStack
      w={"full"}
      overflowY={"auto"}
      spacing={"2rem"}
      align={"end"}
      pb={"2rem"}
      maxH={"80%"}
    >
      {[...new Array(formLength)].map((_, index) => {
        return (
          <VStack w={"full"} align={"start"} spacing={"3px"}>
            <Heading size={"md"} fontWeight={"semibold"}>{`Produk ${
              index + 1
            }`}</Heading>
            <AddProductForm key={index} />;
          </VStack>
        );
      })}
    </VStack>
  );
}

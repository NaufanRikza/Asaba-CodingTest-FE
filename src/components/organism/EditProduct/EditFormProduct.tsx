import { Heading, VStack } from "@chakra-ui/react";
import AddProductForm from "../../molecule/AddProduct/AddProductForm";

export default function EditFormProduct() {
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

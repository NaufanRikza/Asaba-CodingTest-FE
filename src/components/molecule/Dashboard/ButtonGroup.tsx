import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ButtonGroup() {
  const navigate = useNavigate();
  const onCreateClick = () => navigate("/add-product");
  const onEditClick = () => navigate("/edit-product");
  return (
    <HStack>
      <Button
        borderRadius={"full"}
        bg={"#278CB9"}
        color={"white"}
        onClick={onCreateClick}
      >
        Buat Produk
      </Button>
      <Button
        borderRadius={"full"}
        bg={"#278CB9"}
        color={"white"}
        onClick={onEditClick}
      >
        Edit Produk
      </Button>
    </HStack>
  );
}

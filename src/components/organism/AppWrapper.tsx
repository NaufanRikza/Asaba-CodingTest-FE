import { Card, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AppWrapper() {
  return (
    <VStack w={"full"} p={"1rem"}>
      <Card minW={"80%"} h={"calc(100dvh  - 2rem)"} overflowY={"auto"}>
        <Outlet />
      </Card>
    </VStack>
  );
}

import { Text } from "@chakra-ui/react";

interface TableItemProps {
  value: string;
}
export default function TableItem(props: TableItemProps) {
  return <Text fontWeight={"semibold"} fontSize={"16px"}>{props.value}</Text>;
}

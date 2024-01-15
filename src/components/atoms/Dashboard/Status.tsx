import { Badge } from "@chakra-ui/react";

interface StatusProps {
  value: number;
}
export default function Status(props: StatusProps) {
  return (
    <Badge
      colorScheme={props.value ? "green" : "red"}
      variant="subtle"
      borderRadius={"4px"}
      fontSize={"12px"}
    >
      {props.value ? "Aktif" : "Tidak Aktif"}
    </Badge>
  );
}

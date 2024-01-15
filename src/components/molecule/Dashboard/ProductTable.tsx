import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IProductAttributes } from "../../../data/interface/product.interface";
import TableItem from "../../atoms/Dashboard/TableItem";
import Status from "../../atoms/Dashboard/Status";
import TableChecbox from "../../atoms/Dashboard/TableCheckbox";
import { useSelector } from "react-redux";
import { AppState } from "../../../app/redux/store";
import { useEffect } from "react";

interface IProductTableProps {
  data: IProductAttributes[];
}

export default function ProductTable(props: IProductTableProps) {
  const selected = useSelector(
    (state: AppState) => state.selectedTable.selectedTable
  );
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <TableContainer w={"full"} overflowY={"auto"}>
      <Table>
        <Thead bg={"#F0F0F0"}>
          <Tr>
            <Th></Th>
            <Th>No</Th>
            <Th>Kode</Th>
            <Th>Nama</Th>
            <Th>Jumlah</Th>
            <Th>Deskripsi</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Box></Box>
        <Tbody>
          {props.data.map((item, index) => (
            <Tr key={index}>
              <Td maxW={"10px"}>
                <TableChecbox code={item.code} />
              </Td>
              <Td>
                <TableItem value={(index + 1).toString()} />
              </Td>
              <Td>
                <TableItem value={item.code} />
              </Td>
              <Td>
                <TableItem value={item.name} />
              </Td>
              <Td>
                <TableItem value={item.quantity.toString()} />
              </Td>
              <Td>
                <TableItem value={item.description} />
              </Td>
              <Td>
                <Status value={item.is_active} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

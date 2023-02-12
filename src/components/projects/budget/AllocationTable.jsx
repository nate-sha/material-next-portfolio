import { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ExpenseItem from "./ExpenseItem";
export default function AllocationTable({ rows }) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell>Allocation</TableCell>
            <TableCell
              align="right"
              sx={{
                paddingRight: "2rem",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <ExpenseItem
              key={`${row.id}-${index}`}
              id={row.id}
              name={row.name}
              cost={row.cost}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

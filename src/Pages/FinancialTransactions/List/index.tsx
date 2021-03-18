import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import api from "../../../services/api";
import { Title } from "@material-ui/icons";
interface TransactionInterface {
  id: number;
  createdAt: string;
  description: string;
  value: string;
  TransactionType: {
    description: string;
  };
}
const FinancialTransactionList = () => {
  const [transaction, setTransaction] = useState<TransactionInterface[]>([]);
  useEffect(() => {
    async function getData() {
      await api
        .get("/finance-transaction", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authTokenFinance")}`,
          },
        })
        .then((response) => {
          setTransaction(response.data.data);
          console.log(transaction[0]?.TransactionType);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    getData();
  }, []);
  return (
    <>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Transction Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map((item) =>
            item.TransactionType.description === "Outcome" ? (
              <TableRow key={item.id} style={{ backgroundColor: "red" }}>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>R${item.value}</TableCell>
                <TableCell>{item.TransactionType.description}</TableCell>
              </TableRow>
            ) : (
              <TableRow key={item.id} style={{ backgroundColor: "green" }}>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>R${item.value}</TableCell>
                <TableCell>{item.TransactionType.description}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
};
export default FinancialTransactionList;

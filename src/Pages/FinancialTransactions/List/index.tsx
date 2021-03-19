import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@material-ui/core";
import api from "../../../services/api";
import { Title } from "@material-ui/icons";
import { logout } from "../../../Utils/rules";
import Navbar from "../../../Components/Navbar";
interface TransactionInterface {
  id: number;
  createdAt: string;
  description: string;
  value: string;
  TransactionType: {
    description: string;
  };
}
const useStyles = makeStyles((theme: Theme) => ({
  outcome: {
    backgroundColor: theme.palette.error.main,
  },
  income: {
    backgroundColor: theme.palette.success.main,
  },
}));
const FinancialTransactionList = () => {
  const [transaction, setTransaction] = useState<TransactionInterface[]>([]);
  const classes = useStyles();
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
      <Navbar name={"Transactions List"} />
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
          {transaction.map((item) => (
            <TableRow
              key={item.id}
              className={
                item.TransactionType.description === "Outcome"
                  ? classes.outcome
                  : classes.income
              }
            >
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>R${item.value}</TableCell>
              <TableCell>{item.TransactionType.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default FinancialTransactionList;

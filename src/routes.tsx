import { BrowserRouter, Route } from "react-router-dom";
import FinancialTransactionList from "./Pages/FinancialTransactions/List";
import FinancialTransactionForm from "./Pages/FinancialTransactions/Form";
import Landing from "./Pages/Landing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/transactions/list" component={FinancialTransactionList} />
      <Route path="/transactions/form" component={FinancialTransactionForm} />
    </BrowserRouter>
  );
};

export default Routes;

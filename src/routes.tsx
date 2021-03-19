import { BrowserRouter, Route } from "react-router-dom";
import FinancialTransactionList from "./Pages/FinancialTransactions/List";
import FinancialTransactionForm from "./Pages/FinancialTransactions/Form";
import Login from "./Pages/Login";
import PrivateRoute from "./Utils/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
      <PrivateRoute
        path="/transactions/list"
        component={FinancialTransactionList}
      />
      <Route path="/transactions/form" component={FinancialTransactionForm} />
    </BrowserRouter>
  );
};

export default Routes;

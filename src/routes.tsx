import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
    </BrowserRouter>
  );
};

export default Routes;

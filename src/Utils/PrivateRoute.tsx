import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.getItem("authTokenFinance") ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;

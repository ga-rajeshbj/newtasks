import React from "react";
import { Route, Redirect } from "react-router-dom";

const PotectedRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") === "true") {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default PotectedRouter;

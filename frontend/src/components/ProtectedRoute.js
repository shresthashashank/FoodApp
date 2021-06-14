import React from "react";
import { Route, Redirect } from "react-router-dom";

//isAuth will be a state stating if we are authenticated or not
//Component is the component that we want to render. Eg - profile page
function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;

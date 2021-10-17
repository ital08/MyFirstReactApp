import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import { About } from "../pages/Home/components/About";
import { Experience } from "../pages/Home/components/Experience";
import { Info } from "../pages/Home/components/Info";
import { ABOUT, CONTACT, EXPERIENCE, ROOT } from "./CONSTANS";

import { NotFound } from "./NotFound";
export const RouterConfig = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          {/* List all public routes here */}
          <Route exact path={ROOT} component={Home} />
          <Route exact path={ABOUT} component={About} />
          <Route exact path={EXPERIENCE} component={Experience} />
          <Route exact path={CONTACT} component={Info} />
          {/* <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} />
        <Route path="/login">
          <Login />
        </Route> */}

          {/* List all private/auth routes here */}
          {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
          {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
          {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

          {/* List a generic 404-Not Found route here */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
};

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";

const Main = () => {
  return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/termsofuse" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Redirect to="/home" />
        </Switch>
      </div>
      
  );
};

export default Main;

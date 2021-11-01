import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Cars from "./Cars";

const CarsList = () => {
  //const { path } = useRouteMatch();

  return (
    <div className="campaign-list">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Cars} />
        </Switch>
      </Router>
    </div>
  );
};

export default CarsList;

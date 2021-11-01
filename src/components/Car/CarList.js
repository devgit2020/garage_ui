import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Cars from "./Cars";
import Licence from "../LicenceInfo/Licence";
import AppointmentForm from "../NewAppointment/AppointmentForm";

const CarsList = () => {
  //const { path } = useRouteMatch();
  
  return (
    <div className="campaign-list">
      <Router>
        <Switch>
          <Route  path={"/"} component={Cars} />
        </Switch>
        <Switch>
          <Route  path={"/licence"} component={Licence} />
        </Switch>
        <Switch>
          <Route  path={"/appointment"} component={AppointmentForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default CarsList;

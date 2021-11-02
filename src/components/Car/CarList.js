import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cars from "./Cars";
import Licence from "../LicenceInfo/Licence";
import AppointmentForm from "../NewAppointment/AppointmentForm";

const CarList = () => {
    
  return (
    <div className="campaign-list">
      <Router>
        <Switch>
          <Route  path={"/"} component={Cars} />
        </Switch>
        <Switch>
          <Route  path={"/licence/:make"} component={Licence} />
        </Switch>
        <Switch>
          <Route  path={"/appointment"} component={AppointmentForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default CarList;
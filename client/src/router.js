import React, { Component } from "react";
import Landing from "./landing";
import Ticket from "./main/ticket";
import Invoice from "./main/invoice";
import Admin from "./main/admin";
import AddTicket from "./main/addticket";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class Routers extends Component {
  render() {
    const jabatan = localStorage.getItem("jabatan");
    return (
      <div className="Container-app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/Ticket">
              <Ticket />
            </Route>
            <Route path="/Invoice">
              <Invoice />
            </Route>
            {jabatan === "admin" ? (
              <Route path="/Admin">
                <Admin />
              </Route>
            ) : (
              <Redirect to="/" />
            )}

            <Route path="/Add">
              <AddTicket />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routers;

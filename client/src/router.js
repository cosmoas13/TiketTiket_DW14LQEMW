import React, { Component } from "react";
import Landing from "./landing";
import Ticket from "./main/ticket";
import Invoice from "./main/invoice";
import Admin from "./main/admin";
import AddTicket from "./main/addticket";
import { connect } from "react-redux";
import { get_user } from "./_action/user";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class Routers extends Component {
  render() {
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
            <Route path="/Admin">
              <Admin />
            </Route>
            <Route path="/Add">
              <AddTicket />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const MapsToProps = state => {
  return { user: state.user };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_user: () => dispacth(get_user())
  };
};
export default connect(MapsToProps, MapsDispacthToProps)(Routers);

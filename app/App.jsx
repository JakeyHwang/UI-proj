import React, { useCallback, useEffect, useState, Component } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import AnalyticsDashboard from "./components/pages/AnalyticsDashboard/AnalyticsDashboard.jsx";
import SingleWalkthroughAnalytics from "./components/pages/SingleWalkthroughAnalytics/SingleWalkthroughAnalytics.jsx";

const sidebarstyle = {
  background: "#3b3b3b",
  float: "left",
  paddingBottom: "100%",
};
const headerstyle = {
  font: "Arial",
  color: "#0b0b0b",
  background: "#979797",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "40px",
  paddingRight: "40px",
};

const positioning = {
  margin: "auto",
  width: "50%",
  height: "50%",
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <div style={sidebarstyle}>
            <h2 style={headerstyle}>UserTip</h2>
          </div>
          <div style={positioning}>
            <Switch>
              <Route path="/analytics" component={AnalyticsDashboard} />
              <Route path="/single" component={SingleWalkthroughAnalytics} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);

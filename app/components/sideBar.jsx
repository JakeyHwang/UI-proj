import React from "react";
import { connect } from "react-redux";

let styles = {
  background: "grey",
};
const SideBar = () => {
  return (
    <React.Fragment>
      <div style={styles}>
        <h1>UserTip</h1>
      </div>
    </React.Fragment>
  );
};

export default connect()(SideBar);

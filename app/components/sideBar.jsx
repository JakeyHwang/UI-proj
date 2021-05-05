import React from "react";
import { connect } from "react-redux";

let h1 = {
  background: "grey",
};
const SideBar = () => {
  return (
    <React.Fragment>
      <div style={h1}>
        <h1>UserTip</h1>
      </div>
    </React.Fragment>
  );
};

export default connect()(SideBar);

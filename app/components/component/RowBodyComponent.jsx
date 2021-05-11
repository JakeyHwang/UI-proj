import { TableBody } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import RowComponent from "./RowComponent.jsx";

const RowBodyComponent = () => {
  return (
    <TableBody>
      <RowComponent />
    </TableBody>
  );
};

export default connect()(RowBodyComponent);

import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

function RowComponent(props) {
  const tableborder = {
    padding: "10px",
    borderBottom: "2px solid #dddddd",
  };

  return props.data.map(({ name, status, views, completion_rate }) => (
    <TableRow>
      <TableCell key={name} style={tableborder}>
        {name}
      </TableCell>
      <TableCell key={name} style={tableborder}>
        <font color={status === true ? "green" : "red"}>
          {status === true ? "Live" : "Inactive"}
        </font>
      </TableCell>
      <TableCell key={name} style={tableborder}>
        {views}
      </TableCell>
      <TableCell key={name} style={tableborder}>
        {Math.round(completion_rate * 100)}%
      </TableCell>
    </TableRow>
  ));
}

export default connect()(RowComponent);

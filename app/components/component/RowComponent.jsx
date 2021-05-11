import { TableCell, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { RowDataContext } from "./RowDataContext.jsx";

const RowComponent = () => {
  const tableborder = {
    padding: "10px",
    borderBottom: "2px solid #dddddd",
  };

  const [rowData, setRowData] = useContext(RowDataContext);

  return rowData.map(({ name, status, views, completion_rate }) => (
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
};

export default connect()(RowComponent);

import { TableCell, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { RowDataContext } from "../Context/AD_Context.jsx";
import { DeleteRow } from "./DeleteRow.jsx";

const RowComponent = ({ data, deleteRow }) => {
  const tableborder = {
    padding: "10px",
    borderBottom: "2px solid #dddddd",
  };

  return (
    <TableRow>
      <TableCell style={tableborder}>{data.name}</TableCell>
      <TableCell style={tableborder}>
        <font color={data.status === true ? "green" : "red"}>
          {data.status === true ? "Live" : "Inactive"}
        </font>
      </TableCell>
      <TableCell style={tableborder}>{data.views}</TableCell>
      <TableCell style={tableborder}>
        {Math.round(data.completion_rate * 100)}%
      </TableCell>
      <TableCell style={tableborder}>
        <DeleteRow deleteRow={deleteRow} name={data.name} />
      </TableCell>
    </TableRow>
  );
};

export default connect()(RowComponent);

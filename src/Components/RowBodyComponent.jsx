import { TableBody } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import RowComponent from "./RowComponent.jsx";
import { RowDataContext } from "../Context/AD_Context.jsx";

const RowBodyComponent = () => {
  const { rowData, deleteRow } = useContext(RowDataContext);

  return (
    <TableBody>
      {rowData.map((data) => (
        <RowComponent key={data.name} data={data} deleteRow={deleteRow} />
      ))}
    </TableBody>
  );
};

export default connect()(RowBodyComponent);

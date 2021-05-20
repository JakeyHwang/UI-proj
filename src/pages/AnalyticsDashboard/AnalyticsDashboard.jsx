import React, { useCallback, useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import RowBodyComponent from "../../Components/RowBodyComponent.jsx";
import AddNewRow from "../../Components/AddNewRow.jsx";
import { RowDataContext } from "../../Context/AD_Context.jsx";

const AnalyticsDashboard = () => {
  const styling = {
    border: {
      padding: "10px",
      borderBottom: "2px solid #dddddd",
    },
    header: {
      color: "black",
      background: "#ebebeb",
    },
    position: {
      postition: "relative",
      left: "100px",
    },
    buttonposition: {
      position: "absolute",
      right: "100px",
    },
  };
  const { addRow } = useContext(RowDataContext);

  return (
    <div style={styling.position}>
      <h1>Analytics Dashboard</h1>
      <AddNewRow style={styling.buttonposition} addRow={addRow} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={styling.header}>
            <TableRow>
              <TableCell style={styling.border}>Walkthrough Name</TableCell>
              <TableCell style={styling.border}>Status</TableCell>
              <TableCell style={styling.border}>No. of views</TableCell>
              <TableCell style={styling.border}>Completion Rate</TableCell>
              <TableCell style={styling.border}></TableCell>
            </TableRow>
          </TableHead>
          <RowBodyComponent />
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect()(AnalyticsDashboard);

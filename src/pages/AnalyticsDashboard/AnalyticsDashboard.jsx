import React, { useCallback, useEffect, useState, Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import RowBodyComponent from "./AD_component/RowBodyComponent.jsx";
import { RowDataProvider } from "./AD_component/AD_data/RowDataContext.jsx";
import { AddNewRow } from "./AD_component/EditRow.jsx";

const AnalyticsDashboard = () => {
  const styling = {
    tableborder: {
      padding: "10px",
      borderBottom: "2px solid #dddddd",
    },
    tableheader: {
      color: "black",
      background: "#ebebeb",
    },
    tableposition: {
      postition: "relative",
      left: "100px",
    },
    buttonposition: {
      position: "absolute",
      right: "100px",
    },
  };

  return (
    <RowDataProvider>
      <div style={styling.tableposition}>
        <h1>Analytics Dashboard</h1>
        <AddNewRow />
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={styling.tableheader}>
              <TableRow>
                <TableCell style={styling.tableborder}>
                  Walkthrough Name
                </TableCell>
                <TableCell style={styling.tableborder}>Status</TableCell>
                <TableCell style={styling.tableborder}>No. of views</TableCell>
                <TableCell style={styling.tableborder}>
                  Completion Rate
                </TableCell>
              </TableRow>
            </TableHead>
            <RowBodyComponent styling={styling} />
          </Table>
        </TableContainer>
      </div>
    </RowDataProvider>
  );
};

const mapStateToProps = (state) => {};

export default connect()(AnalyticsDashboard);

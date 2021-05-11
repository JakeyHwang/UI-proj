import React, { useCallback, useEffect, useState, Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import RowBodyComponent from "../../component/RowBodyComponent.jsx";
import { RowDataProvider } from "../../component/RowDataContext.jsx";

class AnalyticsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  render() {
    return (
      <RowDataProvider>
        <div style={this.state.tableposition}>
          <h1>Analytics Dashboard</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={this.state.tableheader}>
                <TableRow>
                  <TableCell style={this.state.tableborder}>
                    Walkthrough Name
                  </TableCell>
                  <TableCell style={this.state.tableborder}>Status</TableCell>
                  <TableCell style={this.state.tableborder}>
                    No. of views
                  </TableCell>
                  <TableCell style={this.state.tableborder}>
                    Completion Rate
                  </TableCell>
                </TableRow>
              </TableHead>
              <RowBodyComponent styling={this.state} />
            </Table>
          </TableContainer>
        </div>
      </RowDataProvider>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect()(AnalyticsDashboard);

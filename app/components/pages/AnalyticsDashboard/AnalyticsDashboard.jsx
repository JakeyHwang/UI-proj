import React from "react";
import { connect } from "react-redux";
import RowsComponent from "../../RowsComponent.jsx";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const tableposition = {
  postition: "relative",
  left: "100px",
};

const tableheader = {
  color: "black",
  background: "#ebebeb",
};

const tableborder = {
  padding: "10px",
  borderBottom: "2px solid #dddddd",
};

const AnalyticsDashboard = () => {
  return (
    <div style={tableposition}>
      <h1>Analytics Dashboard</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={tableheader}>
            <TableRow>
              <TableCell style={tableborder}>Walkthrough Name</TableCell>
              <TableCell style={tableborder}>Status</TableCell>
              <TableCell style={tableborder}>No. of views</TableCell>
              <TableCell style={tableborder}>Completion Rate</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <RowsComponent />
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect()(AnalyticsDashboard);

import React from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const singleData = {
  id: "12345667",
  name: "How to create a Walkthrough",
  times_launched: 2923,
  unique_launch: 854,
  completion_rate: 0.4325,
  unique_completion_rate: 0.7206,
  dismissal_rate: 0.3711,
  incomplete_rate: 0.2006,
  errors_count: 67,
};

const tableborder = {
  padding: "10px",
  borderTop: "2px solid #dddddd",
};
const SingleWalkthroughAnalytics = () => {
  return (
    <div>
      <h1>Singular Walkthrough Analytics</h1>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow style={tableborder}>
              <TableCell>No. of times walkthrough is launched</TableCell>
              <TableCell>{singleData.times_launched}</TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>
                No. of times walkthrough is launched (unique users)
              </TableCell>
              <TableCell>{singleData.unique_launch}</TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>Completion rate</TableCell>
              <TableCell>
                {Math.round(singleData.completion_rate * 100)}%
              </TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>Completion rate (unique users)</TableCell>
              <TableCell>
                {Math.round(singleData.unique_completion_rate * 100)}%
              </TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>Dismissal rate</TableCell>
              <TableCell>
                {Math.round(singleData.dismissal_rate * 100)}%
              </TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>Incomplete walkthrough rate</TableCell>
              <TableCell>
                {Math.round(singleData.incomplete_rate * 100)}%
              </TableCell>
            </TableRow>
            <TableRow style={tableborder}>
              <TableCell>No. of Errors</TableCell>
              <TableCell>{singleData.errors_count}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect()(SingleWalkthroughAnalytics);

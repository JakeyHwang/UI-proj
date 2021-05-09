import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

const analyticsData = [
  {
    name: "Google Analytics Onboarding",
    status: false,
    views: 51,
    completion_rate: 0.2721,
  },
  {
    name: "How to install Google Analytics on your ...",
    status: true,
    views: 200,
    completion_rate: 0.6301,
  },
  {
    name: "UserTip Demo",
    status: true,
    views: 453,
    completion_rate: 0.5081,
  },
  {
    name: "How to build a walkthrough",
    status: true,
    views: 3357,
    completion_rate: 0.9174,
  },
  {
    name: "How to build Hovertips",
    status: true,
    views: 567,
    completion_rate: 0.7562,
  },
  {
    name: "How to create a post on LinkedIn",
    status: false,
    views: 67,
    completion_rate: 0.8722,
  },
  {
    name: "How to add a new connection on LinkedIn",
    status: true,
    views: 643,
    completion_rate: 0.8008,
  },
  {
    name: "How to expand your network on LinkedIn",
    status: false,
    views: 32,
    completion_rate: 0.2211,
  },
  {
    name: "How to manage your walkthroughs",
    status: true,
    views: 701,
    completion_rate: 0.9387,
  },
  {
    name: "How to add users to your organization",
    status: true,
    views: 407,
    completion_rate: 0.6425,
  },
];

const tableborder = {
  padding: "10px",
  borderBottom: "2px solid #dddddd",
};

const RowComponent = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <TableBody>
          {analyticsData.map(({ name, status, views, completion_rate }) => (
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
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default connect()(RowComponent);

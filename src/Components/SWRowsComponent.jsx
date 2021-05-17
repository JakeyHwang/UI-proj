import { TableRow, TableCell, TableBody } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { SWContext } from "../Context/SW_Context.jsx";

const SWRowsComponent = () => {
  const tableborder = {
    padding: "10px",
    borderTop: "2px solid #dddddd",
  };

  const [SwData, setSwData] = useContext(SWContext);

  return (
    <TableBody>
      <TableRow style={tableborder}>
        <TableCell>No. of times walkthrough is launched</TableCell>
        <TableCell>{SwData.times_launched}</TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>
          No. of times walkthrough is launched (unique users)
        </TableCell>
        <TableCell>{SwData.unique_launch}</TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>Completion rate</TableCell>
        <TableCell>{Math.round(SwData.completion_rate * 100)}%</TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>Completion rate (unique users)</TableCell>
        <TableCell>
          {Math.round(SwData.unique_completion_rate * 100)}%
        </TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>Dismissal rate</TableCell>
        <TableCell>{Math.round(SwData.dismissal_rate * 100)}%</TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>Incomplete walkthrough rate</TableCell>
        <TableCell>{Math.round(SwData.incomplete_rate * 100)}%</TableCell>
      </TableRow>
      <TableRow style={tableborder}>
        <TableCell>No. of Errors</TableCell>
        <TableCell>{SwData.errors_count}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default connect()(SWRowsComponent);

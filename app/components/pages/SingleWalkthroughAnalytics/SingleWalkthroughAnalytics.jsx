import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

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

// const borderStyle = {
//   border: "1px solid black",
// };

const SingleWalkthroughAnalytics = () => {
  return (
    <div>
      <h1>Singular Walkthrough Analytics</h1>
      <Table style={{ border: "1px solid black" }}>
        <tbody>
          <tr>
            <td>No. of times walkthrough is launched</td>
            <td>{singleData.times_launched}</td>
          </tr>
          <tr>
            <td>No. of times walkthrough is launched (unique users)</td>
            <td>{singleData.unique_launch}</td>
          </tr>
          <tr>
            <td>Completion rate</td>
            <td>{Math.round(singleData.completion_rate * 100)}%</td>
          </tr>
          <tr>
            <td>Completion rate (unique users)</td>
            <td>{Math.round(singleData.unique_completion_rate * 100)}%</td>
          </tr>
          <tr>
            <td>Dismissal rate</td>
            <td>{Math.round(singleData.dismissal_rate * 100)}%</td>
          </tr>
          <tr>
            <td>Incomplete walkthrough rate</td>
            <td>{Math.round(singleData.incomplete_rate * 100)}%</td>
          </tr>
          <tr>
            <td>No. of Errors</td>
            <td>{singleData.errors_count}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect()(SingleWalkthroughAnalytics);

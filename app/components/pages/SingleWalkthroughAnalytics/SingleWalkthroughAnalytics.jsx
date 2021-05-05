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

const tableborder = {
  padding: "10px",
  borderTop: "1px solid #dddddd",
};
const SingleWalkthroughAnalytics = () => {
  return (
    <div>
      <h1>Singular Walkthrough Analytics</h1>
      <table>
        <tbody>
          <tr>
            <td style={tableborder}>No. of times walkthrough is launched</td>
            <td style={tableborder}>{singleData.times_launched}</td>
          </tr>
          <tr>
            <td style={tableborder}>
              No. of times walkthrough is launched (unique users)
            </td>
            <td style={tableborder}>{singleData.unique_launch}</td>
          </tr>
          <tr>
            <td style={tableborder}>Completion rate</td>
            <td style={tableborder}>
              {Math.round(singleData.completion_rate * 100)}%
            </td>
          </tr>
          <tr>
            <td style={tableborder}>Completion rate (unique users)</td>
            <td style={tableborder}>
              {Math.round(singleData.unique_completion_rate * 100)}%
            </td>
          </tr>
          <tr>
            <td style={tableborder}>Dismissal rate</td>
            <td style={tableborder}>
              {Math.round(singleData.dismissal_rate * 100)}%
            </td>
          </tr>
          <tr>
            <td style={tableborder}>Incomplete walkthrough rate</td>
            <td style={tableborder}>
              {Math.round(singleData.incomplete_rate * 100)}%
            </td>
          </tr>
          <tr>
            <td style={tableborder}>No. of Errors</td>
            <td style={tableborder}>{singleData.errors_count}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect()(SingleWalkthroughAnalytics);

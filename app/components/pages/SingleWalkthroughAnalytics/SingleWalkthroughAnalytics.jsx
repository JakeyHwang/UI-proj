import React from "react";
import { connect } from 'react-redux';

const singleData = {
    "id": "12345667",
    "name": "How to create a Walkthrough",
    "times_launched": 2923,
    "unique_launch": 854,
    "completion_rate": 0.4325,
    "unique_completion_rate": 0.7206,
    "dismissal_rate": 0.3711,
    "incomplete_rate": 0.2006,
    "errors_count": 67
};

const SingleWalkthroughAnalytics = () => {

    return (
        <div>
            <h1>Singular Walkthrough Analytics</h1>
            <Table>
            <thead>
                <tr>
                <th>No. of times walkthrough is launched</th>
                <th>No. of times walkthrough is launched (unique users)</th>
                <th>Completion rate</th>
                <th>Completion rate (unique users)</th>
                <th>Dismissal rate</th>
                <th>Incomplete walkthrough rate</th>
                <th>No. of Errors</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(subjects).map(({times_launched, unique_launch, completion_rate, unique_completion_rate, dismissal_rate, incomplete_rate, errors_count}) => 
            <tr>
                <td>{times_launched}</td>
                <td>{unique_launch}</td> 
                <td>{completion_rate}</td>
                <td>{unique_completion_rate}</td>
                <td>{dismissal_rate}</td>
                <td>{incomplete_rate}</td>
                <td>{errors_count}</td>
            </tr>)}
            </tbody>
            </Table>

        </div>
    );
};

const mapStateToProps = state => {
};

export default connect()(SingleWalkthroughAnalytics);

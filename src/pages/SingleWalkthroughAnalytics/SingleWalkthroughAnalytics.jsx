import React from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import SWRowsComponent from "../../Components/SWRowsComponent.jsx";
import { SWProvider } from "../../Context/SW_Context.jsx";

const SingleWalkthroughAnalytics = () => {
  return (
    <SWProvider>
      <div>
        <h1>Singular Walkthrough Analytics</h1>
        <TableContainer>
          <Table>
            <SWRowsComponent />
          </Table>
        </TableContainer>
      </div>
    </SWProvider>
  );
};

const mapStateToProps = (state) => {};

export default connect()(SingleWalkthroughAnalytics);

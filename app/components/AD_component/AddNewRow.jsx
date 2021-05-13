import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddNewRow = () => {
  return (
    <IconButton color="primary" aria-label="Add New Row">
      <AddCircleOutlineIcon />
    </IconButton>
  );
};

export default connect()(AddNewRow);

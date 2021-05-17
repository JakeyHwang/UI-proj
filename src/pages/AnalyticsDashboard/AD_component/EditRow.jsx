import React from "react";
import { useState } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import openModal from "./ANRModal.jsx";

export const AddNewRow = () => {
  return (
    <IconButton color="primary" aria-label="Add New Row">
      <AddCircleOutlineIcon />
    </IconButton>
  );
};
//need to set up modal first then call the modal function from this file to add/delete rows
export const DeleteRow = () => {
  return (
    <IconButton color="secondary" aria-label="Delete Row">
      <DeleteIcon />
    </IconButton>
  );
};

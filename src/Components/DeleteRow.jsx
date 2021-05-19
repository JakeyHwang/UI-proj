import React, { useContext } from "react";
import { useState } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

//need to set up modal first then call the modal function from this file to add/delete rows
export const DeleteRow = ({ deleteRow, name }) => {
  return (
    <IconButton
      color="secondary"
      aria-label="Delete Row"
      onClick={() => deleteRow(name)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

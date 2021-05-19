import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import { AddRow } from "../Context/AddRow.jsx";

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddRowModal = ({ addRow }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add New Row</h2>
      <h3 id="simple-modal-description">Walkthrough Name</h3>
      <Input placeholder="New User Onboarding" id="newData" />
      <Button variant="contained" onClick={handleClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addRow(document.getElementById("newData"))}
      >
        Add
      </Button>
    </div>
  );

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="Add New Row"
        onClick={handleOpen}
        fontSize="11"
      >
        Add New Row
        <AddCircleOutlineIcon />
      </IconButton>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default connect()(AddRowModal);

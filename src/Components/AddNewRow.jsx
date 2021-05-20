import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";

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

const AddNewRow = ({ addRow }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add name");
      return;
    }

    addRow({ name, status: false, views: 0, completion_rate: 0.0 });
    setName("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <form onSubmit={onSubmit}>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Add New Row</h2>
        <h3 id="simple-modal-description">Walkthrough Name</h3>
        <Input
          type="text"
          placeholder="New User Onboarding"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </div>
    </form>
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

export default connect()(AddNewRow);

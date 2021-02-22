import React from "react";
import img1 from "../img/img1.jpg";
import img4 from "../img/img4.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as Yup from "yup";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import * as emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const Home = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o07zra2",
        "template_yumlb7g",
        e.target,
        "user_8CrXGmU4nl3mZZdKvqjqs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <form className={classes.root} onSubmit={sendEmail}>
        <div style={{ flexDirection: "row" }}>
          <TextField fullWidth id="name" label="Name" type="text" name="name" />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            fullWidth
            id="subject"
            label="Subject"
            type="text"
            name="subject"
          />
          <TextField
            fullWidth
            id="message"
            label="Feedback"
            type="textarea"
            name="message"
          />
          <Button variant="contained" type="submit" color="primary">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;

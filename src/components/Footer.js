import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: "1000",
    width: "100%",
    minHeight: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Sleepy
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

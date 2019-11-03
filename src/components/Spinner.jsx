import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

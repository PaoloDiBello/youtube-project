import React from "react";
import { ReactComponent as NotFoundIcon } from "./NoResultsFound.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#fff",
    margin: "20px"
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NotFoundIcon />
      <p>No results found</p>
      <p> Try different keywords or remove search filters </p>
      <p> Or quota has been excedeed </p>
    </div>
  );
};

export default NotFound;

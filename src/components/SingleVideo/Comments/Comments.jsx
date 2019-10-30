import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#fff",
    marginTop: "50px",
    width: "100%",
    maxWidth: 1000
  },
  inline: {
    display: "inline"
  }
}));

function Comments() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Divider variant="inset" component="li" />
      <p>{"3"} Comments</p>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://image.flaticon.com/icons/png/512/25/25634.png"
          />
        </ListItemAvatar>
        <ListItemText secondary={<AddComment />} />
      </ListItem>

      {Array.from(new Array(3)).map(item => {
        return <SingleComment classes={classes} />;
      })}
    </List>
  );
}

export default Comments;

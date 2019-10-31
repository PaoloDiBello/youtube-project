import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import moment from "moment";
import { Button, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline",
    color: "#fff"
  },
  date: {
    display: "inline",
    color: "#909090"
  },
  avatar: {
    backgroundColor: "white"
  },
  icons: {
    color: "white"
  }
}));

const SingleComment = ({ comment }) => {
  /// authorDisplayName textDisplay publishedAt likeCount

  const classes = useStyles();

  const date = moment(comment.publishedAt, "YYYYMMDD").fromNow();

  console.log("comment", comment);
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Cindy Baker"
          src="https://image.flaticon.com/icons/png/512/25/25634.png"
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            {comment.authorDisplayName}{" "}
            <div className={classes.date}>{date}</div>
          </>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="primary"
            >
              {comment.textDisplay}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemIcon className={classes.icons}>
        {comment.likeCount}
        <Button>
          <ThumbUpAltIcon />
        </Button>
      </ListItemIcon>
    </ListItem>
  );
};

export default SingleComment;

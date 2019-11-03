import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ControlsComment from './ControlsComment'

const useStyles = makeStyles(theme => ({
  textComment: {
    display: "block",
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
    alignItems: "center"
  }
}));

const SingleComment = ({ comment }) => {
  /// authorDisplayName textDisplay publishedAt likeCount

  const classes = useStyles();

  const date = moment(comment.publishedAt, "YYYYMMDD").fromNow();

  console.log("comment", comment);
  return (
    <>
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
                className={classes.textComment}
                color="primary"
              >
                {comment.textDisplay}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icons}>
          <ControlsComment comment={comment} />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default SingleComment;

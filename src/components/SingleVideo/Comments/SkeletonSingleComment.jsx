import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";
const SingleComment = ({ classes }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Cindy Baker"
          src="https://image.flaticon.com/icons/png/512/25/25634.png"
        />
      </ListItemAvatar>
      <ListItemText
        primary={<>{"Oui Oui"} 4 years ago</>}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="primary"
            >
              Sandra Adams
              {" — Do you have Paris recommendations? Have you ever…"}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default SingleComment;

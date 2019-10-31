import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";

const menuId = "primary-search-account-menu";

const useStyles = makeStyles(theme => ({
  root: {},
  account: {
    marginLeft: "6px",
    fontSize: "3.5rem"
  }
}));

const Controls = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="upload videos" color="inherit">
        <Badge color="secondary">
          <VideoCallIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="show google app" color="inherit">
        <Badge color="secondary">
          <AppsIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        className={classes.account}
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
};

export default Controls;

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sideBar: {
    padding: "5px"
  }
}));

export const SidebarItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={<b>{"Home"}</b>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WhatshotIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={<b>{"Trends"}</b>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SubscriptionsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={<b>{"Subscriptions"}</b>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FolderIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={<b>{"Library"}</b>} />
      </ListItem>
    </div>
  );
};

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, IconButton, Container } from "@material-ui/core";

import SearchBar from "./SearchBar";
import Controls from "./Controls";
import Drawer from "./Drawer";

import MenuIcon from "@material-ui/icons/Menu";

import Spinner from "../../Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ReactComponent as LogoYoutube } from "../img/youtube.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    // remember
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#272727"
  },
  menuButton: {
    marginRight: 16
  },
  title: {
    maxWidth: "35%",
    maxHeight: "35%",
    cursor: "pointer"
  },
  searchBar: {
    justifyContent: "center",
    width: "100%"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh"
  },
  container: {
    padding: 0
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function Header({ loading, loading2, history, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const goHome = () => {
    history.push("/results?search_query=");
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        {(loading || loading2) && <Spinner />}
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>

          <div onClick={goHome} className={classes.title}>
            <LogoYoutube className={classes.title} />
          </div>

          <SearchBar className={classes.searchbar} />

          <div
            style={{
              flexGrow: 1
            }}
          ></div>
          <Controls />
        </Toolbar>
      </AppBar>

      <Drawer open={open} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.Videos.loadingVideos,
  loading2: state.Videos.loadingVideo
});

export default withRouter(connect(mapStateToProps)(Header));

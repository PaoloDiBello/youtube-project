import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";
import videosActions from "../../../redux/videos/actions";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
const { getVideos } = videosActions;

const useStyles = makeStyles(theme => ({
  search: {
    borderRadius: "1",
    backgroundColor: "#121212",
    border: "1.5px solid #212121",
    borderRight: "none",
    "&:hover": {
      border: "1.5px solid #1C62B9"
    },
    marginLeft: 0,
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  },
  searchIcon: {
    height: "53%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(0, 0%, 19%)",
    "&:hover": {
      color: "white",
      backgroundColor: "hsl(0, 0%, 19%)"
    }
  },
  inputRoot: {
    color: "inherit",
    margin: "auto"
  },
  inputInput: {
    maxWidth: "100%",
    display: "inline-block",
    boxShadow: "none",
    border: "none",
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "40vw",
    [theme.breakpoints.up("md")]: {
      width: "40vw",
      margin: "auto"
    }
  }
}));

const SearchBar = ({ getVideos, history, ...restProps }) => {
  const classes = useStyles();

  const [input, setInput] = useState("");

  const onHandleSubmit = () => {
    const escapedSearchQuery = encodeURI(input);
    history.push(`/results?search_query=${escapedSearchQuery}`);
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onHandleSubmit();
    }
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={classes.search}>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className={classes.searchIcon}>
        <Button color="primary" onClick={onHandleSubmit}>
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  getVideos
};

const SearchBarWithRouter = withRouter(SearchBar);

export default connect(
  null,
  mapDispatchToProps
)(SearchBarWithRouter);

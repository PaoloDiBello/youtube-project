import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";
import videosActions from "../../redux/videos/actions";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";

const { getVideos } = videosActions;

const SearchBar = ({ classes, getVideos, history, ...restProps }) => {
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
      <div className={classes.searchIcon}></div>

      <Button color="primary" onClick={onHandleSubmit}>
        <SearchIcon />
      </Button>
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

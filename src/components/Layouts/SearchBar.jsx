import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";
import videosActions from "../../redux/videos/actions";
import { Button } from "@material-ui/core";
const { getVideos } = videosActions;

const SearchBar = ({ classes, getVideos, ...restProps }) => {
  const [input, setInput] = useState('');

  const onKeyPress = e => {
    if (e.key === "Enter") {
        getVideos(input)
    }
  };

  const onChange = e => {
    setInput(e.target.value);
    console.log("e.target", e.target);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}></div>
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
          <Button>
            <SearchIcon />
          </Button>

    </div>
  );
};

const mapDispatchToProps = {
  getVideos
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

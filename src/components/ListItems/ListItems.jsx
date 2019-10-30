import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import videosActions from "../../redux/videos/actions";
import { getSearchParam } from "../../services/url";
import { withRouter } from "react-router";

import { ReactComponent as FilterIcon } from "../Layouts/img/filter.svg";
import { Divider } from "@material-ui/core";
const { getVideos, selectVideo } = videosActions;

const useStyles = makeStyles(theme => ({
  container: {
    display: "block",
    backgroundColor: "#121212",
    alignItems: "flex-start",
    padding: "20px"
  },
  listItems: {
    width: "60vw"
  },
  filter: {
    width: "30px",
    color: "#C8C7C4",
    fill: "#C8C7C4"
  },
  filterIcon: {
    display: "inline!important"
  },
  divider: {
    backgroundColor: "#C8C7C4"
  }
}));

const ListItems = ({ videos, location, getVideos, selectVideo, history }) => {
  const classes = useStyles();

  console.log("videos", videos);

  const getSearchQuery = () => {
    return getSearchParam(location, "search_query");
  };

  useEffect(() => {
    const query = decodeURI(getSearchQuery());
    getVideos(query);
  }, []);

  const handleVideoSelect = video => {
    selectVideo(video);
    history.push(`/watch/${video.id.videoId}`);
  };

  if (videos.length > 0) {
    const renderedVideos = videos.map(video => {
      return (
        <Item
          key={video.id.videoId}
          video={video}
          handleVideoSelect={() => handleVideoSelect(video)}
        />
      );
      //eslint-disable-next-line
      console.log(video.id);
    });

    return (
      <div className={classes.container}>
        <div className={classes.filter}>
          FILTER
          <div className={classes.filterIcon}>
            <FilterIcon />
          </div>
        </div>
        <div className={classes.listItems}>
          <Divider className={classes.divider} />
          {renderedVideos}
        </div>
      </div>
    );
  } else {
    return <>No videos</>;
  }
};

const mapDispatchToProps = {
  selectVideo,
  getVideos
};

const mapStateToProps = state => ({
  videos: state.Videos.videos
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItems)
);

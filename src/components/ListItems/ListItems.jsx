import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { getSearchParam } from "../../services/url";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../Spinner";
import { withRouter } from "react-router";
import { ReactComponent as FilterIcon } from "../Layouts/img/filter.svg";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { Divider, Button, CircularProgress } from "@material-ui/core";
import NotFound from "../404";

import videosActions from "../../redux/videos/actions";
const { getVideos } = videosActions;

const useStyles = makeStyles(theme => ({
  container: {
    display: "block",
    backgroundColor: "#121212",
    alignItems: "flex-start",
    padding: "20px"
  },
  listItems: {
    width: "60vw",
    maxWidth: "900px"
  },
  filter: {
    fontWeight: "600",
    display: "flex",
    color: "#C8C7C4",
    fill: "#C8C7C4",
    padding: "7px",
    alignItems: "center",
    "&:hover": {
      color: "#fff"
    }
  },
  filterIcon: {
    display: "inline!important",
    padding: "2px"
  },
  divider: {
    backgroundColor: "#C8C7C4"
  }
}));

const ListItems = ({ videos, location, getVideos, history }) => {
  const classes = useStyles();

  console.log("videos", videos);

  const getSearchQuery = () => {
    return getSearchParam(location, "search_query");
  };

  const query = decodeURI(getSearchQuery());

  useEffect(() => {
    getVideos(query);
  }, []);

  const loadMore = () => {
    getVideos(query);
  };

  const handleVideoSelect = video => {
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
        <Button className={classes.filter}>
          <SvgIcon className={classes.filterIcon}>
            <FilterIcon />
          </SvgIcon>
          FILTER
        </Button>
        <Button className={classes.filter}></Button>
        <div className={classes.listItems}>
          <Divider className={classes.divider} />
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true || false}
            loader={<CircularProgress />}
          >
            {renderedVideos}
          </InfiniteScroll>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

const mapDispatchToProps = {
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

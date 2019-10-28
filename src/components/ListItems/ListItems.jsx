import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";

import videosActions from "../../redux/videos/actions";
import { getSearchParam } from "../../services/url";
import { withRouter } from "react-router";

const { getVideos, selectVideo } = videosActions;


const ListItems = ({ videos, location, getVideos, selectVideo, history }) => {
  console.log("videos", videos);

  const getSearchQuery = () => {
    return getSearchParam(location, "search_query");
  };

  useEffect(() => {
    const query = decodeURI(getSearchQuery())
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
      <div
        className="ui relaxed divided list"
        style={{ backgroundColor: "black!important" }}
      >
        {renderedVideos}
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

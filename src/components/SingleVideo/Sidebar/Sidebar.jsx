import React, { useEffect } from "react";
import Item from "../../ListItems/Item";
import { connect } from "react-redux";

import videosActions from "../../../redux/videos/actions";

const { getRelatedVideos } = videosActions;

const Sidebar = ({ videoId, getRelatedVideos, videos, loading }) => {
  useEffect(() => {
    getRelatedVideos(videoId);
  }, [videoId]);

  if (videos.length > 0) {
    var renderedVideos = videos.map(video => {
      return <Item key={video.id.videoId} video={video} sidebar={true} />;
    });
  }

  return (
    <div>
      <p style={{ color: "white" }}>Up next</p>
      <div>{renderedVideos}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  videos: state.Videos.relatedVideos,
  loading: state.Videos.loadingRelatedVideos
});

const mapDispatchToProps = {
  getRelatedVideos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

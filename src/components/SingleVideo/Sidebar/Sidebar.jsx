import React, { useEffect } from "react";
import Item from "../../ListItems/Item";
import { connect } from "react-redux";

import videosActions from "../../../redux/videos/actions";

const { getRelatedVideos } = videosActions;

const Sidebar = ({ videoId, getRelatedVideos, videos, loading }) => {
  useEffect(() => {
    getRelatedVideos(videoId);
  }, [videoId]);

  return <div>{videoId}</div>;
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

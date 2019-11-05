import React, { useEffect } from "react";
import InfoVideo from "./InfoVideo";
import Sidebar from "./Sidebar/Sidebar";
import Comments from "./Comments/Comments";

import { Card, CardMedia } from "@material-ui/core";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectSingleVideo,
  selectVideoLoading
} from "../../redux/videos/selectors";

import videosActions from "../../redux/videos/actions";
import { commafy } from "../../services/commafy";

const { getSingleVideo } = videosActions;

const SingleVideo = ({ video, getSingleVideo, history, loading }) => {
  const { item: videoId } = useParams();

  useEffect(() => {
    getSingleVideo(videoId, history);
  }, [videoId, getSingleVideo]);

  if (!videoId && !loading && !video) {
    return <div>Loading ...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div style={styles.singleVideo}>
        <div style={styles.root}>
          <Card className="video-detail col-md-8" style={styles.card}>
            <CardMedia
              className="embed-responsive embed-responsive-16by9"
              mediaStyle={styles.cardMediaStyle}
            >
              <iframe
                src={videoSrc}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                style={{
                  width: 900,
                  height: 500,
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
                allowFullScreen
                title="Video player"
              />
            </CardMedia>
            <InfoVideo />
          </Card>
          {video.statistics && (
            <Comments
              videoId={videoId}
              count={
                video.statistics.commentCount
                  ? commafy(video.statistics.commentCount)
                  : 0
              }
            />
          )}
        </div>
        <Sidebar videoId={videoId} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  video: selectSingleVideo,
  loading: selectVideoLoading
});

const mapDispatchToProps = {
  getSingleVideo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleVideo);

const styles = {
  outside: {
    color: "white"
  },
  singleVideo: {
    display: "flex"
  },
  root: {
    marginLeft: "70px",
    backgroundColor: "#221F20",
    width: "100%",
    height: "100%",
    maxWidth: "60vw"
  },
  card: {
    position: "relative",
    margin: 10,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#221F20"
  },
  cardHeaderTitle: {
    fontSize: 20
  },
  cardMedia: {
    minHeight: 200,
    width: "80%"
  },
  cardMediaStyle: {
    maxHeight: 500
  }
};

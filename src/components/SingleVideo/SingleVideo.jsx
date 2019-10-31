import React from "react";

import { connect } from "react-redux";

import { selectSingleVideo } from "../../redux/videos/selectors";

import Comments from "./Comments/Comments";

import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";

const SingleVideo = ({ video, match }) => {
  const videoId = match.params.item;

  if (!videoId && !video) {
    return <div>Loading ...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log(typeof video);

    return (
      <div style={styles.marginLeft}>
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
          {video && (
            <CardHeader
              title={
                <Typography color="primary">{video.snippet.title}</Typography>
              }
            />
          )}
          {video && (
            <Typography color="primary">{video.snippet.description}</Typography>
          )}
        </Card>
        <Comments videoId={videoId} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  video: selectSingleVideo(ownProps.match.params.item)(state),
  loading: state.Videos.loadingVideo,
  videos: state.Videos.videos
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleVideo);

const styles = {
  outside: {
    color: "white"
  },
  marginLeft: {
    marginLeft: "70px",
    backgroundColor: "#221F20",
    width: "100%",
    height: "100%"
  },
  card: {
    position: "relative",
    margin: 10,
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

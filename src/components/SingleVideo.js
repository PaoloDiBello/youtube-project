import React from "react";

import { connect } from "react-redux";

import { selectSingleVideo } from "../redux/videos/selectors";
import { Card, CardHeader, CardMedia, CardText } from "material-ui";

const SingleVideo = ({ video, match }) => {
  console.log("match.params.item", match.params.item);
  console.log("video", video);

  const videoId = match.params.item;

  console.log("match", match);

  if (!videoId) {
    return <div>Loadings ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  console.log(typeof video);
  return (
    <div>
      <Card className="video-detail col-md-8" style={styles.card}>
        <CardHeader
          title={video.snippet.title}
          titleStyle={styles.cardHeaderTitle}
        />
        <CardMedia
          className="embed-responsive embed-responsive-16by9"
          mediaStyle={styles.cardMediaStyle}
        >
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{
              width: 700,
              height: 700
            }}
            allowFullScreen
            title="Video player"
          />
        </CardMedia>
        <CardText>{video.snippet.description}</CardText>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  video: selectSingleVideo(ownProps.match.params.item),
  loading: state.Videos.loadingVideo,
  videos: state.Videos.videos
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleVideo);

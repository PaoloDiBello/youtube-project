import React from "react";

import { connect } from "react-redux";

import { selectSingleVideo } from "../../redux/videos/selectors";

import Comments from "./Comments/Comments";

import { Card, CardHeader, CardMedia} from "@material-ui/core";

const SingleVideo = ({ video, match }) => {
  console.log("video", video);

  const videoId = match.params.item;

  if (!videoId && !video) {
    return <div>Loading ...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log(typeof video);

    return (
      <div>

<Card className="video-detail col-md-8" style={styles.card}>
     
        {video && <CardHeader
          title={video.snippet.title}
          titleStyle={styles.cardHeaderTitle}
        />}

        <CardMedia
          className="embed-responsive embed-responsive-16by9"
          mediaStyle={styles.cardMediaStyle}
        >
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{
              width: 1000,
              height: 700
            }}
            allowFullScreen
            title="Video player"
          />
        </CardMedia>
        {video && <p>{video.snippet.description}</p>}
      </Card>
        <Comments />
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
    card: {
      position: 'relative',
      marginTop: 10,
      paddingLeft: 0,
      paddingRight: 0
    },
    cardHeaderTitle: {
      fontSize: 20,
    },
    cardMedia: {
      minHeight: 200,
    },
    cardMediaStyle: {
      maxHeight: 500,
    },
  };
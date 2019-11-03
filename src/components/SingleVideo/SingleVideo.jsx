import React from "react";

import { connect } from "react-redux";

import { selectSingleVideo, selectVideoLoading } from "../../redux/videos/selectors";

import Comments from "./Comments/Comments";

import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { useParams } from 'react-router-dom'
import videosActions from "../../redux/videos/actions";
import { createStructuredSelector } from "reselect";
import moment from "moment";
const { getSingleVideo } = videosActions;

const SingleVideo = ({ video, getSingleVideo, history, loading }) => {

  const { item: videoId } = useParams();

  console.log('video', video)

  React.useEffect(() => {
    getSingleVideo(videoId, history)
  }, [videoId, getSingleVideo])


  if (!videoId && !video) {
    return <div>Loading ...</div>;
  } else {

    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

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
          {(!loading && video.snippet) && (
            <>
              <CardHeader
                title={
                  <Typography color="primary">{video.snippet.title} {video.channelTitle}</Typography>
                }
              />

              <CardHeader
                title={
                  <Typography color="primary">{video.statistics.viewCount} views • {moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()}</Typography>
                }
              />
            </>

          )}
          {(!loading && video.snippet) && (
            <Typography color="primary">{video.snippet.description}</Typography>
          )}
        </Card>
        <Comments videoId={videoId} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  video: selectSingleVideo,
  loading: selectVideoLoading,
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

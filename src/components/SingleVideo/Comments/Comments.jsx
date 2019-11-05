import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import {
  selectCommentsVideoReduced,
  selectLoadingCommentsVideo
} from "../../../redux/videos/selectors";
import InfiniteScroll from "react-infinite-scroller";

import { connect } from "react-redux";
import videosActions from "../../../redux/videos/actions";
import { createStructuredSelector } from "reselect";
import { CircularProgress } from "@material-ui/core";
const { getCommentsVideo, loadMoreCommentsVideo } = videosActions;

const useStyles = makeStyles(theme => ({
  root: {
    color: "#fff",
    marginTop: "50px",
    width: "100%",
    maxWidth: 1000
  },
  avatar: {
    backgroundColor: "white"
  },
  loading: {
    marginLeft: "25vw"
  }
}));

function Comments({
  getCommentsVideo,
  comments,
  loadMoreCommentsVideo,
  loading,
  videoId,
  count
}) {
  const classes = useStyles();
  useEffect(() => {
    getCommentsVideo(videoId);
  }, []);

  const loadMore = () => {
    loadMoreCommentsVideo(videoId);
  };

  console.log("comments", comments);

  return (
    <List className={classes.root}>
      <Divider variant="inset" component="li" />
      <p>{count} Comments</p>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://image.flaticon.com/icons/png/512/25/25634.png"
            className={classes.avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary={<AddComment />} />
      </ListItem>

      {!loading && comments.length > 0 ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true || false}
          loader={<CircularProgress className={classes.loading} />}
        >
          {comments.map(comment => (
            <SingleComment comment={comment} />
          ))}
        </InfiniteScroll>
      ) : (
        Array.from(new Array(3)).map(item => {
          return <div></div>;
        })
      )}
    </List>
  );
}

const mapStateToProps = createStructuredSelector({
  comments: selectCommentsVideoReduced,
  loading: selectLoadingCommentsVideo
});

const mapDispatchToProps = {
  getCommentsVideo,
  loadMoreCommentsVideo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

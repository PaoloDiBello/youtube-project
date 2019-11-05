import React, { useState } from "react";
import { connect } from "react-redux";
import {
  CardHeader,
  Typography,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  Link,
  Tooltip
} from "@material-ui/core";

import {
  selectSingleVideo,
  selectVideoLoading
} from "../../redux/videos/selectors";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import { commafy } from "../../services/commafy";
import { kFormatter } from "../../services/kFormatter";
import { urlify } from "../../services/urlify";

import { makeStyles } from "@material-ui/core/styles";

import ReactHtmlParser from "react-html-parser";

import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  marginTop: {
    marginTop: "1em"
  },
  white: {
    color: "#fff",
    "&>a": {
      color: "#3EA6FF",
      textDecoration: "none"
    }
  },
  whiteShade: {
    color: "#909090"
  },
  tag: {
    color: "#3EA6FF",
    fontSize: "0.7rem"
  },
  avatar: {
    backgroundColor: "white",
    display: "inline",
    marginRight: "8px"
  },
  channel: {
    display: "inline-flex",
    flexDirection: "row"
  },
  subscribe: {
    backgroundColor: "#FF0000",
    color: "#fff",
    padding: "9px",
    alignSelf: "flex-end"
  },
  share: {
    transform: "scaleX(-1)"
  },
  description: {
    marginLeft: "3.5em"
  },
  divider: {
    backgroundColor: "#909090"
  },
  controls: {
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "flex-start",
    alignItems: "center",
    fontWeight: "600",
    color: "#909090",
    "&>*": {
      padding: "2px"
    },
    "&>*:hover": {
      cursor: "pointer"
    },
    "&>*:active": {
      color: "#3EA6FF"
    }
  }
}));

const InfoVideo = ({ video, loading }) => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const classes = useStyles();

  if (!loading && video.snippet) {
    return (
      <div className={clsx(classes.white, classes.marginTop)}>
        {video.snippet.tags &&
          video.snippet.tags.map(tag => (
            <Link className={classes.tag}>{`#${tag} `}</Link>
          ))}
        <CardHeader
          title={
            <Typography>
              {video.snippet.title} {video.channelTitle}
            </Typography>
          }
        />
        <Divider className={classes.divider} />
        <CardHeader
          title={
            <Typography className={classes.whiteShade}>
              {commafy(video.statistics.viewCount)} views •{" "}
              {moment(video.snippet.publishedAt).format("MMM DD, YYYY")}
            </Typography>
          }
        />
        <div className={classes.controls}>
          <Tooltip title="I like this">
            <ThumbUpIcon />
          </Tooltip>
          {kFormatter(video.statistics.likeCount)}
          <Tooltip title="I dislike this">
            <ThumbDownIcon />
          </Tooltip>
          {kFormatter(video.statistics.dislikeCount)}
          <Tooltip title="Share">
            <ReplyIcon className={classes.share} />
          </Tooltip>
          SHARE
          <PlaylistAddIcon />
          SAVE
        </div>
        <List>
          <ListItem className={classes.channel}>
            <Avatar
              className={classes.avatar}
              alt="Cindy Baker"
              src="https://image.flaticon.com/icons/png/512/25/25634.png"
            />
            <p style={{ alignSelf: "flex-end" }}>
              {video.snippet.channelTitle}
            </p>

            <Button className={classes.subscribe} color="primary">
              subscribe
            </Button>
          </ListItem>
        </List>
        <div className={classes.description}>
          <Typography
            color="primary"
            noWrap={expand}
            className={classes.white}
            style={{ marginLeft: "10px" }}
          >
            {ReactHtmlParser(urlify(video.snippet.description))}
          </Typography>

          <Button onClick={handleExpand} className={classes.whiteShade}>
            SHOW {expand ? "MORE" : "LESS"}
          </Button>
        </div>
        <Divider className={classes.divider} />
      </div>
    );
  } else {
    return "Something happened";
  }
};

const mapStateToProps = createStructuredSelector({
  video: selectSingleVideo,
  loading: selectVideoLoading
});

export default connect(mapStateToProps)(InfoVideo);

import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { kFormatter } from "../../services/kFormatter";
import { withRouter } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    height: "100%",
    backgroundColor: "#121212",
    color: "#fff",
    border: "none",
    boxShadow: "none",
    margin: "10px",
    "&:hover": {}
  },
  details: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  content: {
    flex: "1 0 1",
    cursor: "pointer"
  },
  title: {},
  text: {
    fontSize: "0.9em!important"
  },
  cover: {
    maxWidth: "20vw",
    minWidth: "10vw",
    width: "550px",
    cursor: "pointer"
  },
  moreIcon: {
    alignSelf: "flex-start",
    color: "#909090",
    marginTop: "17px",
    cursor: "pointer",
    "&:hover": {
      color: "#fff"
    }
  },
  moreIconHidden: {
    visibility: "hidden"
  }
}));

const Item = ({ video, history, sidebar = false }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [hover, setHover] = useState(false);
  const date = moment(video.snippet.publishedAt, "YYYYMMDD").fromNow();

  const handleVideoSelect = video => {
    history.push(`/watch/${video.id.videoId}`);
  };

  const handleHover = hover => {
    setHover(hover);
  };

  return (
    <Card
      className={classes.card}
      onClick={() => handleVideoSelect(video)}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={classes.details}>
        <CardMedia
          classes={{
            root: clsx(classes.cover)
          }}
          image={video.snippet.thumbnails.high.url}
          title={<div className={classes.text}>{video.snippet.title}</div>}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            {ReactHtmlParser(video.snippet.title)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.text}
          >
            {ReactHtmlParser(video.snippet.channelTitle)} •{" "}
            {kFormatter(video.statistics.viewCount)} views • {date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.text}
          >
            {!sidebar && ReactHtmlParser(video.snippet.description)}
          </Typography>
        </CardContent>
      </div>

      <MoreVertIcon
        classes={{
          root: clsx(
            hover && classes.moreIcon,
            !hover && classes.moreIconHidden
          )
        }}
      />
    </Card>
  );
};

export default withRouter(Item);

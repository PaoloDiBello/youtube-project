import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#121212",
    color: "#fff",
    margin: "10px"
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
  cover: {
    maxWidth: "20vw",
    width: "100%",
    cursor: "pointer"
  }
}));

const Item = ({ video, handleVideoSelect }) => {
  const classes = useStyles();
  const theme = useTheme();

  const date = moment(video.snippet.publishedAt, "YYYYMMDD").fromNow();

  return (
    <Card className={classes.card} onClick={() => handleVideoSelect(video)}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {decodeURI(video.snippet.title)}
          </Typography>
          <Typography variant="subtitle1">{date}</Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Item;

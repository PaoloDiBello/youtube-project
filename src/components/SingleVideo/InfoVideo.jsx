import React, { useState } from "react";
import { connect } from "react-redux";
import { CardHeader, Typography, Button, Avatar, ListItemText, ListItemAvatar, List, ListItem, Divider } from "@material-ui/core";

import { selectSingleVideo, selectVideoLoading } from "../../redux/videos/selectors";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { commafy } from '../../services/commafy'
import { kFormatter } from '../../services/kFormatter'

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    white: {
        color: "#fff",
    },
    whiteShade: {
        color: "#909090"
    },
    avatar: {
        backgroundColor: "white",
        display: "inline",
    },
    subscribe: {
        backgroundColor: "#FF0000",
        color: "#fff",
    },
    share: {
        transform: "scaleX(-1)",
    },
    divider: {
        backgroundColor: "#909090"
    },
    controls: {
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "flex-start",
        alignItems: "center",
        "&>*": {
            padding: "2px",
        }
    }


}));


const InfoVideo = ({ video, loading }) => {

    const [expand, setExpand] = useState(true)

    const handleExpand = () => {
        setExpand(!expand)
    }

    const classes = useStyles();

    if (!loading && video.snippet) {
        return (
            <div className={classes.white}>
                <CardHeader
                    title={
                        <Typography>{video.snippet.title} {video.channelTitle}</Typography>
                    }
                />
                <Divider className={classes.divider} />
                <CardHeader
                    title={
                        <Typography className={classes.whiteShade}>{commafy(video.statistics.viewCount)} views • {moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()}</Typography>
                    }
                />
                <div className={classes.controls}>
                    <ThumbUpIcon />
                    {kFormatter(video.statistics.likeCount)}
                    <ThumbDownIcon />
                    {kFormatter(video.statistics.dislikeCount)}
                    <ReplyIcon className={classes.share} /> SHARE
                <PlaylistAddIcon />
                    SAVE
                </div>
                <List>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            alt="Cindy Baker"
                            src="https://image.flaticon.com/icons/png/512/25/25634.png"

                        />
                        {video.snippet.channelTitle}
                        <Button className={classes.subscribe} color="primary">subscribe</Button>
                    </ListItem >
                </List>

                <Typography color="primary"
                    noWrap={expand}
                    className={classes.white}
                >
                    {video.snippet.description}
                </Typography>

                <Button onClick={handleExpand} className={classes.whiteShade}>SHOW {expand ? "MORE" : "LESS"}</Button>
                <Divider className={classes.divider} />
            </div>
        )
    } else {
        return "Something happened"
    }


}


const mapStateToProps = createStructuredSelector({
    video: selectSingleVideo,
    loading: selectVideoLoading,
});

export default connect(mapStateToProps)(InfoVideo)

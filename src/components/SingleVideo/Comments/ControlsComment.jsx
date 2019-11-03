import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { kFormatter } from '../../../services/kFormatter.js'
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    root: {
        color: "white",
        display: "flex",
        alignItems: "center",
        marginLeft: '40px'
    },
    thumbs: {
        display: "inline",
        background: "none",
        color: "#909090",
        padding: 0,
        boxShadow: "none",
        alignSelf: "flex-end",
        '&:hover': {
            color: '#fff',
            background: "none",
        }
    },
    reply: {
        textTransform: 'uppercase',
        color: "#909090",
        fontWeight: '600',
        padding: '20px',
        '&:hover': {
            color: '#fff',
        }
    }
}));


const ControlsComment = ({ comment }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab className={classes.thumbs}>
                <ThumbUpIcon />
            </Fab>
            {kFormatter(comment.likeCount)}
            <Fab className={classes.thumbs}>
                <ThumbDownIcon />
            </Fab>
            <Button className={classes.reply}>
                reply
            </Button>
        </div>
    )
}

export default ControlsComment

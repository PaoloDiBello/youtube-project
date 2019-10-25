import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}  />
        //eslint-disable-next-line
        console.log(video.id);
    });

    return <div className='ui relaxed divided list' style={{backgroundColor: 'black!important'}}>{renderedVideos}</div>;
};
export default VideoList;
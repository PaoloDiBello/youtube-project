import { createSelector } from "reselect";

const selectVideosState = state => state.Videos;

export const selectVideos = createSelector(
  [selectVideosState],
     Videos => Videos.videos
  );

  export const selectSingleVideo = videoId => 
  createSelector(
    [selectVideos],
       videos => videos.length>0 ? videos[videos.findIndex((video)=>(video.id.videoId===videoId))] : null
    );
  

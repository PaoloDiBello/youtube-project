import { createSelector } from "reselect";

const selectVideosState = state => state.Videos;

export const selectVideos = createSelector(
  [selectVideosState],
  Videos => Videos.videos
);

export const selectSingleVideo = videoId =>
  createSelector(
    [selectVideos],
    videos =>
      videos.length > 0
        ? videos[videos.findIndex(video => video.id.videoId === videoId)]
        : null
  );

export const selectCommentsVideo = createSelector(
  [selectVideosState],
  Videos => Videos.commentsVideo
);

export const selectCommentsVideoReduced = createSelector(
  [selectCommentsVideo],
  comments =>
    comments.data
      ? comments.data.items.map(item => item.snippet.topLevelComment.snippet)
      : []
);

export const selectLoadingCommentsVideo = createSelector(
  [selectVideosState],
  Videos => Videos.loadingCommentsVideo
);

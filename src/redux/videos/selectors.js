import { createSelector } from "reselect";

const selectVideosState = state => state.Videos;

export const selectVideos = createSelector(
  [selectVideosState],
  Videos => Videos.videos
);

export const selectSingleVideo = createSelector(
  [selectVideosState],
  Videos => Videos.video
);

export const selectVideoLoading = createSelector(
  [selectVideosState],
  Videos => Videos.loadingVideo
);

export const selectCommentsVideo = createSelector(
  [selectVideosState],
  Videos => Videos.commentsVideo
);

export const selectCommentsVideoReduced = createSelector(
  [selectCommentsVideo],
  comments =>
    comments.length > 0 && comments
      ? comments.map(item => item.snippet.topLevelComment.snippet)
      : []
);

export const selectLoadingCommentsVideo = createSelector(
  [selectVideosState],
  Videos => Videos.loadingCommentsVideo
);

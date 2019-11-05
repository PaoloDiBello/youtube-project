const videosActions = {
  CHANGE_VIDEOS_TYPE: "CHANGE_VIDEOS_TYPE",

  GET_VIDEOS: "GET_VIDEOS",
  GET_VIDEOS_STATISTICS: "GET_VIDEOS_STATISTICS",
  LOAD_MORE_VIDEOS: "LOAD_MORE_VIDEOS",
  GET_VIDEOS_SUCCESS: "GET_VIDEOS_SUCCESS",
  GET_VIDEOS_FAILED: "GET_VIDEOS_FAILED",
  LOAD_MORE_VIDEOS_SUCCESS: "LOAD_MORE_VIDEOS_SUCCESS",

  SELECT_VIDEO: "SELECT_VIDEO",

  GET_SINGLE_VIDEO: "GET_SINGLE_VIDEO",
  GET_SINGLE_VIDEO_SUCCESS: "GET_SINGLE_VIDEO_SUCCESS",
  GET_SINGLE_VIDEO_FAILED: "GET_SINGLE_VIDEO_FAILED",

  GET_RELATED_VIDEOS: "GET_RELATED_VIDEOS",
  GET_RELATED_VIDEOS_SUCCESS: "GET_RELATED_VIDEOS_SUCCESS",
  GET_RELATED_VIDEOS_FAILED: "GET_RELATED_VIDEOS_FAILED",

  GET_COMMENTS_VIDEO: "GET_COMMENTS_VIDEO",
  GET_COMMENTS_VIDEO_SUCCESS: "GET_COMMENTS_VIDEO_SUCCESS",
  GET_COMMENTS_VIDEO_FAILED: "GET_COMMENTS_VIDEO_FAILED",
  LOAD_MORE_COMMENTS_VIDEO: "LOAD_MORE_COMMENTS_VIDEO",
  LOAD_MORE_COMMENTS_VIDEO_SUCCESS: "LOAD_MORE_COMMENTS_VIDEO_SUCCESS",
  LOAD_MORE_COMMENTS_VIDEO_FAILED: "LOAD_MORE_COMMENTS_VIDEO_FAILED",

  changeVideosType: type => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.CHANGE_VIDEOS_TYPE,
        payload: type
      });
    };
  },

  getVideos: query => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.GET_VIDEOS,
        payload: query
      });
    };
  },

  loadMoreVideos: query => {
    return (dispatch, getState) => {
      const nextPageToken = getState().Videos.nextPageToken;
      dispatch({
        type: videosActions.LOAD_MORE_VIDEOS,
        payload: {
          query,
          nextPageToken
        }
      });
    };
  },

  selectVideo: payload => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.SELECT_VIDEO,
        payload
      });
    };
  },

  getSingleVideo: (name, history) => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.GET_SINGLE_VIDEO,
        payload: name,
        history
      });
    };
  },

  getRelatedVideos: videoId => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.GET_RELATED_VIDEOS,
        payload: videoId
      });
    };
  },

  getCommentsVideo: videoId => {
    return (dispatch, getState) => {
      dispatch({
        type: videosActions.GET_COMMENTS_VIDEO,
        payload: videoId
      });
    };
  },
  loadMoreCommentsVideo: videoId => {
    return (dispatch, getState) => {
      const nextPageToken = getState().Videos.nextPageTokenComments;
      dispatch({
        type: videosActions.LOAD_MORE_COMMENTS_VIDEO,
        payload: {
          videoId,
          nextPageToken
        }
      });
    };
  }
};

export default videosActions;

const videosActions = {
  
    CHANGE_VIDEOS_TYPE: 'CHANGE_VIDEOS_TYPE',
  
    GET_VIDEOS: "GET_VIDEOS",
    GET_VIDEOS_SUCCESS: "GET_VIDEOS_SUCCESS",
  
    GET_SINGLE_VIDEO: "GET_SINGLE_VIDEO",
    GET_SINGLE_VIDEO_SUCCESS: "GET_SINGLE_VIDEO_SUCCESS",  
    GET_SINGLE_VIDEO_FAILED: "GET_SINGLE_VIDEO_FAILED",  

  
    changeVideosType: type => {
      return (dispatch, getState) => {
        dispatch({
          type: videosActions.CHANGE_VIDEOS_TYPE,
          payload: type
        });
      }
    },
    

    getVideos: (payload) => {
      return (dispatch, getState) => {
        dispatch({
          type: videosActions.GET_VIDEOS,
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
  }

  }


  export default videosActions;
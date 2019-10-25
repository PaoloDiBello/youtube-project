import videosActions from './actions';

const initState = {
  videos: [],
  video: {},
  videosType: 'OPEN',
  loadingVideos: false,
  loadingVideo: false
};

export default function videosReducer(state = initState, action) {
  //const videos = state.Videos;

  switch (action.type) {

    case videosActions.GET_VIDEOS:
      return {
        ...state,
        loadingVideos: true
      };

    case videosActions.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        loadingVideos: false
      };

    case videosActions.CHANGE_VIDEOS_TYPE:
      return {
        ...state,
        videosType: action.payload
      }


      case videosActions.GET_SINGLE_VIDEO:
        return {
          ...state,
          video: action.payload,
          loadingVideo: true
        };

      case videosActions.GET_SINGLE_VIDEO_SUCCESS:
        return {
          ...state,
          video: action.payload,
          loadingVideo: false
        };
  
        case videosActions.GET_SINGLE_VIDEO_FAILED:
          return {
            ...state,
            loadingVideo: false
          };
  

    default:
      return state;
  }
}

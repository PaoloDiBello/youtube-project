import videosActions from "./actions";

const initState = {
  videos: [],
  nextPageToken: null, // for videos
  video: {},
  commentsVideo: {},
  nextPageTokenComments: null,
  relatedVideos: [],
  nextPageTokenRelatedVideos: null,
  videosType: "OPEN",
  loadingVideos: false,
  loadingVideo: false,
  loadingCommentsVideo: false
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
        nextPageToken: action.nextPageToken,
        loadingVideos: false
      };

    case videosActions.GET_VIDEOS_FAILED:
      return {
        ...state,
        loadingVideos: false
      };

    case videosActions.LOAD_MORE_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
        nextPageToken: action.nextPageToken
      };

    case videosActions.CHANGE_VIDEOS_TYPE:
      return {
        ...state,
        videosType: action.payload
      };

    case videosActions.SELECT_VIDEO:
      return {
        ...state,
        video: action.payload
      };

    case videosActions.GET_SINGLE_VIDEO:
      return {
        ...state,
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

    case videosActions.GET_RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        relatedVideos: action.payload,
        nextPageTokenRelatedVideos: action.nextPageToken
      };

    case videosActions.GET_RELATED_VIDEOS_FAILED:
      return {
        ...state
      };

    case videosActions.GET_COMMENTS_VIDEO:
      return {
        ...state,
        loadingCommentsVideo: true
      };

    case videosActions.GET_COMMENTS_VIDEO_SUCCESS:
      return {
        ...state,
        loadingCommentsVideo: false,
        commentsVideo: action.payload,
        nextPageTokenComments: action.nextPageToken
      };
    case videosActions.GET_COMMENTS_VIDEO_FAILED:
      return {
        ...state,
        loadingCommentsVideo: false,
        commentsVideo: []
      };

    case videosActions.LOAD_MORE_COMMENTS_VIDEO_SUCCESS:
      return {
        ...state,
        commentsVideo: [...state.commentsVideo, ...action.payload],
        nextPageTokenComments: action.nextPageToken
      };

    default:
      return state;
  }
}

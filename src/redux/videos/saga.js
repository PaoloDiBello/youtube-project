import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import actions from './actions';
//import fakeData from '../../containers/Jira/jira.data.json';
import VideosHelper from '../../helpers/videosHelper';
//import { buildStateVideos } from './helperSaga'


export function* watchGetVideos() {
  yield takeEvery(actions.GET_VIDEOS, doGetVideos);
}

export function* doGetVideos({payload}) {
  const response = yield call(VideosHelper.getVideos, payload);

  if(response){
    yield put({
      type: actions.GET_VIDEOS_SUCCESS,
      payload: response,
    });  
  } else {
    yield put({
      type: actions.GET_VIDEOS_FAILED,
    }); 
  }
}

export function* watchGetSingleVideo() {
  yield takeEvery(actions.GET_SINGLE_VIDEO, doGetSingleVideo);
}

export function* doGetSingleVideo({payload, history}) {

  const response = yield call(VideosHelper.getSingleVideo, payload );

  if(!response.error){
    yield put({
      type: actions.GET_SINGLE_VIDEO_SUCCESS,
      payload: response,
    });
  } else {
    yield put({
      type: actions.GET_SINGLE_VIDEO_FAILED,
    });

      history.push('/404')
  }

}

export function* watchGetVideoComments() {
  yield takeEvery(actions.GET_COMMENTS_VIDEO, doGetVideoComments);
}

export function* doGetVideoComments({payload}) {

  //const response = yield call(VideosHelper.getVideoComments, payload);
  
const response = []

  yield put({
    type: actions.GET_COMMENTS_VIDEO_SUCCESS,
    payload: response,
  });

}



export default function* rootSaga() {
  yield all([
    fork(watchGetVideos),
    fork(watchGetSingleVideo),
    fork(watchGetVideoComments)
  ]);
}
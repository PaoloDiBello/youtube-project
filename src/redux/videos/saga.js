import { all, takeEvery, fork, put, call } from "redux-saga/effects";
import actions from "./actions";
//import fakeData from '../../containers/Jira/jira.data.json';
import VideosHelper from "../../helpers/videosHelper";
//import { buildStateVideos } from './helperSaga'

export function* watchGetVideos() {
  yield takeEvery(actions.GET_VIDEOS, doGetVideos);
}

export function* doGetVideos({ payload }) {
  const response = yield call(VideosHelper.getVideos, payload);

  if (!response.error && response) {
    const videoIds = response.map(item => item.id.videoId).join(",");
    console.log("videoIds", videoIds);

    yield put({
      type: actions.GET_VIDEOS_STATISTICS,
      payload: {
        ids: videoIds,
        videos: response
      }
    });
  } else {
    yield put({
      type: actions.GET_VIDEOS_FAILED
    });
  }
}

export function* watchGetVideosStatistics() {
  yield takeEvery(actions.GET_VIDEOS_STATISTICS, doGetVideosStatistics);
}

export function* doGetVideosStatistics({ payload: { videos, ids } }) {
  const response = yield call(VideosHelper.getVideosStatistics, ids);

  if (!response.error && response) {
    const videosWithStatistics = videos.map((video, i) => ({
      statistics: response[i].statistics,
      ...video
    }));

    yield put({
      type: actions.GET_VIDEOS_SUCCESS,
      payload: videosWithStatistics
    });
  }
}

export function* watchGetSingleVideo() {
  yield takeEvery(actions.GET_SINGLE_VIDEO, doGetSingleVideo);
}

export function* doGetSingleVideo({ payload, history }) {
  const response = yield call(VideosHelper.getSingleVideo, payload);
  console.log("response", response);

  if (!response.error) {
    yield put({
      type: actions.GET_SINGLE_VIDEO_SUCCESS,
      payload: response
    });
  } else {
    yield put({
      type: actions.GET_SINGLE_VIDEO_FAILED
    });

    history.push("/404");
  }
}

export function* watchGetCommentsVideo() {
  yield takeEvery(actions.GET_COMMENTS_VIDEO, doGetCommentsVideo);
}

export function* doGetCommentsVideo({ payload }) {
  const response = yield call(VideosHelper.getCommentsVideo, payload);

  if (!response.error) {
    yield put({
      type: actions.GET_COMMENTS_VIDEO_SUCCESS,
      payload: response
    });
  } else {
    yield put({
      type: actions.GET_COMMENTS_VIDEO_FAILED
    });
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetVideos),
    fork(watchGetVideosStatistics),
    fork(watchGetSingleVideo),
    fork(watchGetCommentsVideo)
  ]);
}

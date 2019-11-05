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
    const { items, nextPageToken } = response;

    const videoIds = items.map(item => item.id.videoId).join(",");
    console.log("videoIds", videoIds);

    yield put({
      type: actions.GET_VIDEOS_STATISTICS,
      payload: {
        ids: videoIds,
        videos: items,
        nextPageToken
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

export function* doGetVideosStatistics({
  payload: { videos, ids, nextPageToken, loadMore = false, related = false }
}) {
  const response = yield call(VideosHelper.getVideosStatistics, ids);

  if (!response.error && response) {
    const videosWithStatistics = videos.map((video, i) => ({
      statistics: response[i].statistics,
      ...video
    }));

    if (!related) {
      if (!loadMore) {
        yield put({
          type: actions.GET_VIDEOS_SUCCESS,
          payload: videosWithStatistics,
          nextPageToken
        });
      } else {
        yield put({
          type: actions.LOAD_MORE_VIDEOS_SUCCESS,
          payload: videosWithStatistics,
          nextPageToken
        });
      }
    } else {
      yield put({
        type: actions.GET_RELATED_VIDEOS_SUCCESS,
        payload: videosWithStatistics,
        nextPageToken
      });
    }
  }
}

export function* watchLoadMoreVideos() {
  yield takeEvery(actions.LOAD_MORE_VIDEOS, doLoadMoreVideos);
}

export function* doLoadMoreVideos({ payload }) {
  const response = yield call(VideosHelper.loadMoreVideos, payload);

  if (!response.error && response) {
    const { items, nextPageToken } = response;

    const videoIds = items.map(item => item.id.videoId).join(",");
    console.log("videoIds", videoIds);

    const loadMore = !!nextPageToken;

    yield put({
      type: actions.GET_VIDEOS_STATISTICS,
      payload: {
        ids: videoIds,
        videos: items,
        nextPageToken,
        loadMore
      }
    });
  } else {
    yield put({
      type: actions.GET_VIDEOS_FAILED
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

  const { items, nextPageToken } = response;
  if (!response.error && response) {
    yield put({
      type: actions.GET_COMMENTS_VIDEO_SUCCESS,
      payload: items,
      nextPageToken
    });
  } else {
    yield put({
      type: actions.GET_COMMENTS_VIDEO_FAILED
    });
  }
}

export function* watchLoadMoreCommentsVideo() {
  yield takeEvery(actions.LOAD_MORE_COMMENTS_VIDEO, doLoadMoreCommentsVideo);
}

export function* doLoadMoreCommentsVideo({ payload }) {
  const response = yield call(VideosHelper.loadMoreCommentsVideo, payload);
  if (!response.error && response) {
    const { items, nextPageToken } = response;
    yield put({
      type: actions.LOAD_MORE_COMMENTS_VIDEO_SUCCESS,
      payload: items,
      nextPageToken
    });
  } else {
    yield put({
      type: actions.LOAD_MORE_COMMENTS_VIDEO_FAILED
    });
  }
}

export function* watchGetRelatedVideos() {
  yield takeEvery(actions.GET_RELATED_VIDEOS, doGetRelatedVideos);
}

export function* doGetRelatedVideos({ payload }) {
  const response = yield call(VideosHelper.getRelatedVideos, payload);

  if (!response.error && response) {
    const { items, nextPageToken } = response;

    const videoIds = items.map(item => item.id.videoId).join(",");
    console.log("videoIds", videoIds);

    yield put({
      type: actions.GET_VIDEOS_STATISTICS,
      payload: {
        ids: videoIds,
        videos: items,
        nextPageToken,
        related: true
      }
    });
  } else {
    yield put({
      type: actions.GET_VIDEOS_FAILED
    });
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetVideos),
    fork(watchGetVideosStatistics),
    fork(watchLoadMoreVideos),
    fork(watchGetSingleVideo),
    fork(watchGetCommentsVideo),
    fork(watchLoadMoreCommentsVideo),
    fork(watchGetRelatedVideos)
  ]);
}

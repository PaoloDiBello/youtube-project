import { all } from 'redux-saga/effects';
import videosSagas from './videos/saga';

export default function* rootSaga(getState) {
  yield all([
    videosSagas(),
  ]);
}
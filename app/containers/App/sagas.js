import { takeLatest } from 'redux-saga';
import { call, put, select, fork } from 'redux-saga/effects';
import { LOAD_USER_INFO } from 'containers/App/constants';
import { userInfoLoaded, userInfoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { selectTextField } from 'containers/App/selectors';

export function* getUserInfo() {
  const username = yield select(selectTextField());
  const requestURL = `https://api.github.com/users/${username}`;

  try {
    const userInfo = yield call(request, requestURL);
    yield put(userInfoLoaded(userInfo));
  } catch (err) {
    yield put(userInfoLoadingError(err));
  }
}

export function* githubData() {
  yield fork(takeLatest, LOAD_USER_INFO, getUserInfo);
}

export default function* rootSaga() {
  yield [ call(githubData) ];
}

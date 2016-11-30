import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import { getUserInfo, githubData } from '../sagas';

import rootSaga from '../sagas';

import { LOAD_USER_INFO } from 'containers/App/constants';
import { userInfoLoaded, userInfoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import * as selectors from 'containers/App/selectors';

const username = 'giamir';

describe('getUserInfo Saga', () => {
  let getUserInfoGenerator;

  beforeEach(() => {
    getUserInfoGenerator = getUserInfo();

    spyOn(selectors, 'selectTextField').and.callThrough();
    getUserInfoGenerator.next().value;
    expect(selectors.selectTextField).toHaveBeenCalled();

    const requestURL = `https://api.github.com/users/${username}`;
    const callDescriptor = getUserInfoGenerator.next(username).value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

  it('should dispatch the userInfoLoaded action if it requests the data successfully', () => {
    const response = {
      data: {
        name: 'Giamir Buoncristiani'
      }
    };
    const putDescriptor = getUserInfoGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(userInfoLoaded(response)));
  });

  it('should call the userInfoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getUserInfoGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(userInfoLoadingError(response)));
  });
});

describe('githubData Saga', () => {
  it('should watch for LOAD_USER_INFO actions and invoke getUserInfo', () => {
    const getGithubDataGenerator = githubData();
    const forkDescriptor = getGithubDataGenerator.next().value;
    expect(forkDescriptor).toEqual(fork(takeLatest, LOAD_USER_INFO, getUserInfo));
  });
});

describe('rootSaga Saga', () => {
  it('should return the array of sagas to be run by the saga middleware', () => {
    const rootSagaGenerator = rootSaga();
    const sagasArray = rootSagaGenerator.next().value;
    expect(sagasArray).toEqual([ call(githubData) ]);
  });
});

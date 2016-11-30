import {
  CHANGE_TEXT_FIELD,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR
} from './constants';

export function changeTextField(value) {
  return {
    type: CHANGE_TEXT_FIELD,
    value
  };
}

export function loadUserInfo() {
  return {
    type: LOAD_USER_INFO
  };
}

export function userInfoLoaded(userInfo) {
  return {
    type: LOAD_USER_INFO_SUCCESS,
    userInfo
  };
}

export function userInfoLoadingError(error) {
  return {
    type: LOAD_USER_INFO_ERROR,
    error
  };
}

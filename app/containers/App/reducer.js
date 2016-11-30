import {
  CHANGE_TEXT_FIELD,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  textField: '',
  users: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_USER_INFO:
    if (!state.get('textField')) return state;
    return state
      .set('loading', true)
      .set('error', false);
  case LOAD_USER_INFO_SUCCESS:
    return state
      .set('users', state.get('users').push(action.userInfo))
      .set('textField', '')
      .set('loading', false);
  case LOAD_USER_INFO_ERROR:
    return state
      .set('error', action.error)
      .set('loading', false);
  case CHANGE_TEXT_FIELD:
    return state.set('textField', action.value);
  default:
    return state;
  }
}

export default appReducer;

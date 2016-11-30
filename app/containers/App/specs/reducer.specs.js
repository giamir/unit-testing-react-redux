import appReducer from '../reducer';
import {
  loadUserInfo,
  userInfoLoaded,
  userInfoLoadingError,
  changeTextField
} from '../actions';

import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      textField: '',
      users: []
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqualImmutable(expectedResult);
  });

  describe('loadUserInfo action', () => {
    it('should return the initial state if textField is empty', () => {
      const expectedResult = state;
      expect(appReducer(state, loadUserInfo())).toEqualImmutable(expectedResult);
    });

    it('should set loading to true', () => {
      state = state.set('textField', 'value');
      const newState = appReducer(state, loadUserInfo());
      expect(newState.get('loading')).toBe(true);
    });

    it('should set error to false', () => {
      state = state.set('textField', 'value')
                   .set('error', true);
      const newState = appReducer(state, loadUserInfo());
      expect(newState.get('error')).toBe(false);
    });
  });

  describe('userInfoLoaded action', () => {
    it('should add to the users list the user info', () => {
      const userInfo = { name: 'Giamir' };
      const newState = appReducer(state, userInfoLoaded(userInfo));
      expect(newState.get('users').first()).toEqual(userInfo);
    });

    it('should set loading to false', () => {
      state = state.set('loading', true);
      const newState = appReducer(state, userInfoLoaded({}));
      expect(newState.get('loading')).toBe(false);
    });

    it('should set textField to an empty string', () => {
      state = state.set('textField', 'value');
      const newState = appReducer(state, userInfoLoaded({}));
      expect(newState.get('textField')).toBe('');
    });
  });

  describe('userInfoLoadingError action', () => {
    it('should set loading to false', () => {
      state = state.set('loading', true);
      const newState = appReducer(state, userInfoLoadingError());
      expect(newState.get('loading')).toBe(false);
    });

    it('should set error to the error message', () => {
      const errorMessage = 'error';
      const newState = appReducer(state, userInfoLoadingError(errorMessage));
      expect(newState.get('error')).toBe(errorMessage);
    });
  });

  describe('changeTextField action', () => {
    it('should change the textField with the action value', () => {
      const value = 'a value';
      const expectedResult = fromJS({
        loading: false,
        error: false,
        textField: 'a value',
        users: []
      });

      expect(appReducer(state, changeTextField(value))).toEqualImmutable(expectedResult);
    });
  });
});

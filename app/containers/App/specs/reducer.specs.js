import appReducer from '../reducer';
import {
  addItem,
  changeTextField
} from '../actions';

import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      textField: '',
      list: []
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqualImmutable(expectedResult);
  });

  describe('addItem action', () => {
    it('should add item to the list and clear the textField', () => {
      const newTextField = 'a value';
      state = state.set('textField', newTextField);
      const expectedResult = fromJS({
        textField: '',
        list: [newTextField]
      });

      expect(appReducer(state, addItem())).toEqualImmutable(expectedResult);
    });

    it('should return the initial state if textField is empty', () => {
      const expectedResult = state;
      expect(appReducer(state, addItem())).toEqualImmutable(expectedResult);
    });
  });

  describe('changeTextField action', () => {
    it('should change the textField with the action value', () => {
      const value = 'a value';
      const expectedResult = fromJS({
        textField: 'a value',
        list: []
      });

      expect(appReducer(state, changeTextField(value))).toEqualImmutable(expectedResult);
    });
  });
});

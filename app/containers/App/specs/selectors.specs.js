import { fromJS } from 'immutable';

import {
  selectList,
  selectTextField
} from '../selectors';

describe('selectList', () => {
  const listSelector = selectList();
  it('should select the list', () => {
    const list = ['an item'];
    const mockedState = fromJS({
      global: {
        textField: '',
        list
      }
    });
    expect(listSelector(mockedState)).toEqual(list);
  });
});

describe('selectTextField', () => {
  const textFieldSelector = selectTextField();
  it('should select the textField', () => {
    const textField = 'value';
    const mockedState = fromJS({
      global: {
        textField,
        list: []
      }
    });
    expect(textFieldSelector(mockedState)).toEqual(textField);
  });
});

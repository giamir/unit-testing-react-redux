import { fromJS } from 'immutable';

import {
  selectUsers,
  selectTextField
} from '../selectors';

describe('selectList', () => {
  const listSelector = selectUsers();
  it('should select the users name and html_url props', () => {
    const users = [
      {
        name: 'Giamir',
        html_url: 'https://giamir.com',
        someOtherValue: 'hello'
      }
    ];
    const mockedState = fromJS({
      global: {
        textField: '',
        users
      }
    });
    expect(listSelector(mockedState)).toEqual([{text: 'Giamir', link: 'https://giamir.com'}]);
  });
});

describe('selectTextField', () => {
  const textFieldSelector = selectTextField();
  it('should select the textField', () => {
    const textField = 'value';
    const mockedState = fromJS({
      global: {
        textField,
        users: []
      }
    });
    expect(textFieldSelector(mockedState)).toEqual(textField);
  });
});

import { ADD_ITEM, CHANGE_TEXT_FIELD } from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  textField: '',
  list: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.get('textField')) return state;
      return state
        .set('textField', '')
        .set('list', state.get('list').push(state.get('textField')));
    case CHANGE_TEXT_FIELD:
      return state.set('textField', action.value);
    default:
      return state;
  }
}

export default appReducer;

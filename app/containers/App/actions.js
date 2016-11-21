import { ADD_ITEM, CHANGE_TEXT_FIELD } from './constants';

export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function changeTextField(value) {
  return {
    type: CHANGE_TEXT_FIELD,
    value
  };
}

import { ADD_ITEM, DELETE_ITEM, CHANGE_TEXT_FIELD } from './constants';

export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function deleteItem() {
  return {
    type: DELETE_ITEM
  };
}

export function changeTextField(value) {
  return {
    type: CHANGE_TEXT_FIELD,
    value
  };
}

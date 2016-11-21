import { createSelector } from 'reselect';

const selectGlobal = () => state => state.get('global');

const selectList = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('list').toArray()
);

const selectTextField = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('textField')
);

export {
  selectList,
  selectTextField
};

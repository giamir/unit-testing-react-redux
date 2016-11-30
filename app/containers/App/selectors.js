import { createSelector } from 'reselect';

const selectGlobal = () => state => state.get('global');

const selectUsers = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('users').toJS().map((user) => {
    return {
      text: user.name,
      link: user.html_url
    };
  })
);

const selectTextField = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('textField')
);

export {
  selectUsers,
  selectTextField
};

import React from 'react';
import { Provider } from 'react-redux';

import ListItem from 'components/ListItem';
import TextField from 'components/TextField';
import Button from 'components/Button';

const App = () => (
  <article>
    <ListItem item="An Item" />
    <TextField placeholder="What's up?" />
    <Button>Save</Button>
  </article>
);

export default (
  <App />
);

import React from 'react';
import { Provider } from 'react-redux';

import H1 from 'components/H1';
import List from 'components/List';
import ListItem from 'components/ListItem';
import TextField from 'components/TextField';
import Button from 'components/Button';

const items = [
  'Remember to buy milk',
  'Attending John meeting',
  'Buy a new laptop',
  'Enjoy the holiday'
];

const App = () => (
  <article>
    <H1>Another Todo List</H1>
    <List component={ListItem} items={items} />
    <TextField placeholder="Add something to the list" />
    <Button>Add</Button>
  </article>
);

export default (
  <App />
);

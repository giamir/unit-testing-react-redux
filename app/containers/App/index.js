import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 500px;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = props => (
  <AppWrapper>
    <H1>Another Todo List</H1>
    <List component={ListItem} items={items} />
    <TextField placeholder="Add something to the list" />
    <Button>Add</Button>
  </AppWrapper>
);

export default App;

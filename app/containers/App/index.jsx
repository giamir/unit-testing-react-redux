import React from 'react';
import { Provider } from 'react-redux';

import Button from 'components/Button';
import TextField from 'components/TextField';

const App = () => (
  <article>
    <TextField placeholder="What's up?" />
    <Button>Save</Button>
  </article>
);

export default (
  <App />
);

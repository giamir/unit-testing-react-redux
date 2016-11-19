import 'babel-polyfill';

import jasmineEnzyme from 'jasmine-enzyme';
beforeEach(() => { jasmineEnzyme(); });

const context = require.context('../app', true, /\.specs$/);
context.keys().forEach(context);

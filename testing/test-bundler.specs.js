import 'babel-polyfill';
import 'jasmine-immutablejs-matchers';
import jasmineEnzyme from 'jasmine-enzyme';

beforeEach(() => { jasmineEnzyme(); }); // eslint-disable-line jasmine/no-global-setup

const context = require.context('../app', true, /\.specs$/);
context.keys().forEach(context);

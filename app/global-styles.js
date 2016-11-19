import { injectGlobal } from 'styled-components';
import colors from 'colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: ${colors.background};
    color: ${colors.primary};
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  article {
    margin: 0 auto;
    width: 400px;
  }
`;

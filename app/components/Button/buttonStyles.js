import { css } from 'styled-components';
import colors from 'colors';

const buttonStyles = (className = 'primary') => (
  css`
    display: inline-block;
    box-sizing: border-box;
    padding: 0.25em 2em;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid ${colors[className]};
    color: ${colors[className]};
    &:hover {
      background: ${colors[className]};
      color: white;
    }
  `
);

export default buttonStyles;

import { css } from 'styled-components';
import colors from 'colors';

const textFieldStyles = css`
  background: ${colors.background};
  color: ${colors.primary};
  width: 380px;
  display: block;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  padding: 10px;
  border: none;
  border-bottom: solid 2px ${colors.secondary};
  transition: border 0.3s;
  &:focus {
    outline: none;
    border-bottom: solid 2px ${colors.primary};
  }
`;

export default textFieldStyles;

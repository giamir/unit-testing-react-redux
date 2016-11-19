import styled from 'styled-components';
import buttonStyles from './buttonStyles';

const A = styled.a`
  ${props => buttonStyles(props.className)}
`;

export default A;

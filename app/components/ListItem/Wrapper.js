import styled from 'styled-components';
import colors from 'colors';

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid ${colors.secondary};
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;

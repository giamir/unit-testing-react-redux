import React, { PropTypes, Children } from 'react';

import A from './A';
import Wrapper from './Wrapper';

const Button = props => (
  <Wrapper>
    <A onClick={props.onClick} className={props.className}>
      {Children.toArray(props.children)}
    </A>
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

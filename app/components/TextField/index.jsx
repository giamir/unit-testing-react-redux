import React, { PropTypes } from 'react';

import Input from './Input';
import Wrapper from './Wrapper';

const TextField = props => (
  <Wrapper>
    <Input onChange={props.onChange} placeholder={props.placeholder} />
  </Wrapper>
);

TextField.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default TextField;

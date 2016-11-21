import React, { PropTypes } from 'react';

import Input from './Input';
import Wrapper from './Wrapper';

const TextField = (props) => {
  const onKeyDown = (evt) => {
    if (evt.key === 'Enter') props.onEnterKeyDown();
  };

  return (
    <Wrapper>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={onKeyDown}
      />
    </Wrapper>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextField;

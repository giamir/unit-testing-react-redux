import React, { PropTypes } from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

const ListItem = props => (
  <Wrapper>
    <Item>
      {props.children}
    </Item>
  </Wrapper>
);

ListItem.propTypes = {
  children: PropTypes.any
};

export default ListItem;

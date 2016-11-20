import React, { PropTypes } from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

const ListItem = props => (
  <Wrapper>
    <Item>
      {props.item}
    </Item>
  </Wrapper>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;

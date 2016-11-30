import React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';

const List = (props) => {
  const ComponentToRender = props.component;
  let content = null;

  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
};

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array
};

export default List;

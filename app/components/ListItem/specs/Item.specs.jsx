import React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item';

describe('<Item />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Item />);
    expect(renderedComponent).toHaveTagName('div');
  });
});

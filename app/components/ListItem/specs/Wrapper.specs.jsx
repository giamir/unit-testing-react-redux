import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('ListItem <Wrapper />', () => {
  it('should render a <li> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent).toHaveTagName('li');
  });
});

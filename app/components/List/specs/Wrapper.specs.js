import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('List <Wrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent).toHaveTagName('div');
  });
});

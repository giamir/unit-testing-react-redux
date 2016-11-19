import React from 'react';
import { shallow } from 'enzyme';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render an <h1> tag', () => {
    const renderedComponent = shallow(<H1 />);
    expect(renderedComponent).toHaveTagName('h1');
  });
});

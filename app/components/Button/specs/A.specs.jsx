import React from 'react';
import { shallow } from 'enzyme';

import A from '../A';

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = shallow(<A />);
    expect(renderedComponent).toHaveTagName('a');
  });
});

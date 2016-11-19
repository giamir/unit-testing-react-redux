import React from 'react';
import { shallow } from 'enzyme';

import Ul from '../Ul';

describe('List <Ul />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<Ul />);
    expect(renderedComponent).toHaveTagName('ul');
  });
});

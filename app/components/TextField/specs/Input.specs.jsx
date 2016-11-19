import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('TextField <Input />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = shallow(<Input />);
    expect(renderedComponent).toHaveTagName('input');
  });
});

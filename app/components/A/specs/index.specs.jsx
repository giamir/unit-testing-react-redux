import { shallow } from 'enzyme';
import React from 'react';

import A from '../index';

const href = 'https://giamir.com';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <A href={href} {...props}>
    {children}
  </A>
);

describe('<A />', () => {
  it('should render properly', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });
});

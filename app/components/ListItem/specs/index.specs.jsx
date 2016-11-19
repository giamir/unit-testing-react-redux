import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../index';

const children = 'A list item';
const renderComponent = () => mount(
  <ListItem>
    {children}
  </ListItem>
);

describe('<ListItem />', () => {
  it('should render the list item', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div')).toHaveText(children);
  });
});

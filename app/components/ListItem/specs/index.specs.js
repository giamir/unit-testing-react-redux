import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../index';

const item = 'a list item';
const renderComponent = (props = {}) => mount(
  <ListItem {...props} />
);

describe('ListItem <ListItem />', () => {
  it('should render the list item', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });

  it('should have item', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('div')).toHaveText(item);
  });
});

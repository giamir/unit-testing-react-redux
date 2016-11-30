import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../index';

const item = {
  text: 'a list item',
  link: 'a link'
};
const renderComponent = (props = {}) => mount(
  <ListItem {...props} />
);

describe('ListItem <ListItem />', () => {
  it('should render the list item', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent).toBePresent();
  });

  it('should have item text', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('a')).toHaveText(item.text);
  });

  it('should have item link', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find({ href: 'a link' })).toBePresent();
  });
});

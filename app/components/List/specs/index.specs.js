import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../../ListItem';
import List from '../index';

describe('List <List />', () => {
  it('should not render the component if no items are passed', () => {
    const renderedComponent = mount(
      <List component={ListItem} />
    );
    expect(renderedComponent.find(ListItem)).not.toBePresent();
  });

  it('should render the items', () => {
    const items = [
      { text: 'hello', link: 'world' }
    ];
    const renderedComponent = mount(
      <List items={items} component={ListItem} />
    );
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });
});

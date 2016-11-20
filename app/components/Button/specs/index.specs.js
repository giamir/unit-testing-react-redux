import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const children = 'Save';
const renderComponent = (props = {}) => mount(
  <Button {...props}>
    {children}
  </Button>
);

describe('Button <Button />', () => {
  it('should render the button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toHaveText(children);
  });

  it('should handle click events', () => {
    const onClickSpy = jasmine.createSpy('onClickSpy');
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});

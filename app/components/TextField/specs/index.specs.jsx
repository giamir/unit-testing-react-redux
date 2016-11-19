import React from 'react';
import { mount } from 'enzyme';

import TextField from '../index';

const renderComponent = (props = {}) => mount(
  <TextField {...props} />
);

describe('<TextField />', () => {
  it('should render the text field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });

  it('should have the placeholder text', () => {
    const renderedComponent = renderComponent({ placeholder: 'I am the placeholder' });
    expect(renderedComponent.find('input[placeholder="I am the placeholder"]')).toBePresent();
  });

  it('should handle change events', () => {
    const onChangeSpy = jasmine.createSpy('onChangeSpy');
    const renderedComponent = renderComponent({ onChange: onChangeSpy });
    renderedComponent.find('input').simulate('change');
    expect(onChangeSpy).toHaveBeenCalled();
  });
});

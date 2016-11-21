import React from 'react';
import { mount } from 'enzyme';

import TextField from '../index';

const renderComponent = (props = {}) => mount(
  <TextField {...props} />
);

describe('TextField <TextField />', () => {
  it('should render the text field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent).toBePresent();
  });

  it('should have the placeholder text', () => {
    const renderedComponent = renderComponent({ placeholder: 'the placeholder' });
    expect(renderedComponent.find('input[placeholder="the placeholder"]')).toBePresent();
  });

  it('should have the value text', () => {
    const renderedComponent = renderComponent({ value: 'the value', onChange: () => {} });
    expect(renderedComponent.find('input')).toHaveValue('the value');
  });

  it('should handle change events', () => {
    const onChangeSpy = jasmine.createSpy('onChangeSpy');
    const renderedComponent = renderComponent({ onChange: onChangeSpy });
    renderedComponent.find('input').simulate('change');
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('should handle enter key down events', () => {
    const onEnterKeyDownSpy = jasmine.createSpy('onKeyDownSpy');
    const renderedComponent = renderComponent({ onEnterKeyDown: onEnterKeyDownSpy });
    renderedComponent.find('input').simulate('keyDown', { key: 'Enter' });
    expect(onEnterKeyDownSpy).toHaveBeenCalled();
  });
});

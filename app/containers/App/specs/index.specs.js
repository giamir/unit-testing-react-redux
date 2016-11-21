import React from 'react';
import { shallow } from 'enzyme';

import { App, mapDispatchToProps } from '../index';
import { addItem, changeTextField } from '../actions';

import H1 from 'components/H1';
import List from 'components/List';
import ListItem from 'components/ListItem';
import TextField from 'components/TextField';
import Button from 'components/Button';

describe('<App />', () => {
  const props = {
    list: [],
    textField: 'value',
    onChangeText: () => {},
    onEnterKeyDown: () => {},
    onClickButton: () => {}
  };

  it('should render the heading', () => {
    const renderedComponent = shallow(<App {...props} />);
    expect(renderedComponent).toContainReact(<H1>Another Todo List</H1>);
  });

  it('should render the list of items', () => {
    const renderedComponent = shallow(<App {...props} />);
    expect(renderedComponent).toContainReact(<List component={ListItem} items={props.list} />);
  });

  it('should render the text field', () => {
    const renderedComponent = shallow(<App {...props} />);
    expect(renderedComponent).toContainReact(
      <TextField
        placeholder="Add something to the list"
        value={props.textField}
        onChange={props.onChangeText}
        onEnterKeyDown={props.onEnterKeyDown}
      />
    );
  });

  it('should render the add button', () => {
    const renderedComponent = shallow(<App {...props} />);
    expect(renderedComponent).toContainReact(
      <Button onClick={props.onClickButton}>Add</Button>
    );
  });

  describe('mapDispatchToProps', () => {
    describe('onClickButton', () => {
      it('should be injected', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onClickButton).toBeDefined();
      });

      it('should dispatch addItem when called', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        result.onClickButton();
        expect(dispatch).toHaveBeenCalledWith(addItem());
      });
    });

    describe('onEnterKeyDown', () => {
      it('should be injected', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onEnterKeyDown).toBeDefined();
      });

      it('should dispatch addItem when called', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        result.onEnterKeyDown();
        expect(dispatch).toHaveBeenCalledWith(addItem());
      });
    });

    describe('onChangeText', () => {
      it('should be injected', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeText).toBeDefined();
      });

      it('should dispatch changeTextField when called', () => {
        const dispatch = jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        const value = 'a value';
        result.onChangeText({ target: { value } });
        expect(dispatch).toHaveBeenCalledWith(changeTextField(value));
      });
    });
  });
});

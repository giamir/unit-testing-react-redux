import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectUsers, selectTextField } from './selectors';

import { changeTextField, loadUserInfo } from './actions';

import H1 from 'components/H1';
import List from 'components/List';
import ListItem from 'components/ListItem';
import TextField from 'components/TextField';
import Button from 'components/Button';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 500px;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <H1>Github Profiles</H1>
        <List component={ListItem} items={this.props.users} />
        <TextField
          placeholder="Add a github username"
          value={this.props.textField}
          onChange={this.props.onChangeText}
          onEnterKeyDown={this.props.onEnterKeyDown}
        />
        <Button onClick={this.props.onClickButton}>Add</Button>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  users: PropTypes.array,
  textField: PropTypes.string,
  onChangeText: PropTypes.func,
  onClickButton: PropTypes.func,
  onEnterKeyDown: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeText: evt => dispatch(changeTextField(evt.target.value)),
    onClickButton: () => dispatch(loadUserInfo()),
    onEnterKeyDown: () => dispatch(loadUserInfo())
  };
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  textField: selectTextField()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

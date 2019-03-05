import React, { Component } from 'react';
import Popup from 'reactjs-popup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import { Form, Strong, Input, ButtonGroup, Cancel, Add } from './styles';

class AddUserModal extends Component {
  state = {
    userInput: '',
  };

  handleClickAdd = (e) => {
    e.preventDefault();
    const data = {
      userName: this.state.userInput,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    };

    this.props.addUserRequest(data);
    return this.props.onClickCancel();
  }

  render() {
    return (
      <Popup open={this.props.showModal} 
        closeOnDocumentClick 
        onClose={this.props.onClickCancel} 
        contentStyle={{
          borderRadius:"5px",
          width: "300px"
        }}
      >
        <Form onSubmit={this.handleClickAdd}>
          <Strong>Add new user</Strong>
          <Input
            type="text"
            placeholder="Github user"
            id="gihub-user"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <ButtonGroup>
            <Cancel type="button" onClick={this.props.onClickCancel}>
              Cancel
            </Cancel>
            <Add type="submit">Add</Add>
          </ButtonGroup>
        </Form>
      </Popup>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(AddUserModal);

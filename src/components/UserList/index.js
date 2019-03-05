import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import { Content, List, User, Image, UserInfo, Name, Login, Delimiter } from './styles';

const UserList = ({ users, removeUser }) => (
  <Content className="App">
    <List>
      { users.data.map((user, i) => (
        <Fragment key={user.id}>
          { i > 0 && <Delimiter />}
          <User>
            <Image src={user.avatar_url} alt="avatar"/>
            <UserInfo>
              <Name>{user.name}</Name>
              <Login>{user.login}</Login>
            </UserInfo>
            <i className="fa fa-times-circle" onClick={e => removeUser(user.id)} />
          </User>
        </Fragment>
      ))
      }
    </List>
  </Content>
);

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReduces';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(followAC(userId));
    },

    unfollow(userId) {
      dispatch(unfollowAC(userId));
    },

    setUsers(users) {
      dispatch(setUsersAC(users));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

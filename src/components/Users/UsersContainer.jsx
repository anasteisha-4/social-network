import { connect } from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/usersReduces';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
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
    },

    setTotalUsersCount(totalUsersCount) {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },

    setCurrentPage(currentPage) {
      dispatch(setCurrentPageAC(currentPage));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

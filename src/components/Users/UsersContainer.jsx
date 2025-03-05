import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow
} from '../../redux/usersReducer';
import Preloader from '../Preloader/Preloader';
import Users from './Users';

const UsersContainer = (props) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      props.setCurrentPage(1);
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      props.getUsers(props.pageSize, props.currentPage);
    }
  }, [initialized]);

  const changePage = (page) => {
    props.getUsers(props.pageSize, page);
  };

  return props.isFetching ? (
    <Preloader />
  ) : (
    <Users {...props} changePage={changePage} />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})(UsersContainer);

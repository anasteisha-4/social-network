import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../api/api';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from '../../redux/usersReduces';
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
      props.toggleIsFetching(true);
      getUsers(props.pageSize, props.currentPage)
        .then((value) => {
          props.setUsers(value.items);
          props.setTotalUsersCount(value.totalCount);
          props.toggleIsFetching(false);
        })
        .catch((error) => alert(error));
    }
  }, [initialized]);

  const changePage = (page) => {
    props.toggleIsFetching(true);
    getUsers(props.pageSize, page)
      .then((value) => {
        props.setUsers(value.items);
        props.setCurrentPage(page);
        props.toggleIsFetching(false);
      })
      .catch((error) => alert(error));
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
    isFetching: state.users.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching
})(UsersContainer);

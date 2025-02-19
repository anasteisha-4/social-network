import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
      fetch(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`,
        {
          credentials: 'include'
        }
      )
        .then((response) => response.json())
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
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${page}`,
      {
        credentials: 'include'
      }
    )
      .then((response) => response.json())
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

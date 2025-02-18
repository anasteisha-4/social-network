import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC
} from '../../redux/usersReduces';
import Preloader from '../Preloader/Preloader';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
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
    },

    toggleIsFetching(isFetching) {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

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
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
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
      `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${page}`
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
    <Users
      totalUsersCount={props.totalUsersCount}
      currentPage={props.currentPage}
      pageSize={props.pageSize}
      users={props.users}
      follow={props.follow}
      unfollow={props.unfollow}
      changePage={changePage}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

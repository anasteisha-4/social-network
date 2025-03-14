import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

const initialState = {
  users: [],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id)
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({
  type: SET_USERS,
  users
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleFollowingInProgress = (followingInProgress, id) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  followingInProgress,
  id
});

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI
      .getUsers(pageSize, currentPage)
      .then((value) => {
        dispatch(setUsers(value.items));
        dispatch(setTotalUsersCount(value.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
      })
      .catch((error) => alert(error));
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    usersAPI.follow(id).then((data) => {
      if (!data.resultCode) {
        dispatch(followSuccess(id));
      }
      dispatch(toggleFollowingInProgress(false, id));
    });
  };
};

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    usersAPI.unfollow(id).then((data) => {
      if (!data.resultCode) {
        dispatch(unfollowSuccess(id));
      }
      dispatch(toggleFollowingInProgress(false, id));
    });
  };
};

export default usersReducer;

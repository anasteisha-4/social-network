import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}

const setAuthUserData = (id, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: {
    id,
    email,
    login
  }
});

const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
});

export const getMe = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    authAPI
      .getMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUserData(id, email, login));
        }
      })
      .catch((error) => alert(error))
      .finally(() => dispatch(setIsFetching(false)));
  };
};

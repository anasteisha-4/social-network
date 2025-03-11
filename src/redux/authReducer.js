import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';
const SET_LOGIN_SUBMITTED = 'SET-LOGIN-SUBMITTED';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
  errorMessage: '',
  loginSubmitted: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    case SET_LOGIN_SUBMITTED:
      return {
        ...state,
        loginSubmitted: action.loginSubmitted
      };
    default:
      return state;
  }
}

const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: {
    id,
    email,
    login
  },
  isAuth
});

const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
});

const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage
});

const setLoginSubmitted = (loginSubmitted) => ({
  type: SET_LOGIN_SUBMITTED,
  loginSubmitted
});

export const getMe = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    authAPI
      .getMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      })
      .catch((error) => alert(error))
      .finally(() => dispatch(setIsFetching(false)));
  };
};

export const login = ({ email, password, rememberMe }) => {
  return (dispatch) => {
    authAPI.login({ email, password, rememberMe }).then((data) => {
      if (!data.resultCode) {
        dispatch(getMe());
        dispatch(setLoginSubmitted(true));
        dispatch(setErrorMessage(''));
      } else {
        dispatch(setErrorMessage(data.messages[0]));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (!data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false));
      } else {
        dispatch(setErrorMessage(data.messages[0]));
      }
    });
  };
};

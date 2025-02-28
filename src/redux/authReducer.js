import API from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: {
    id,
    email,
    login
  }
});

export const getMe = () => {
  return (dispatch) => {
    API.getMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUserData(id, email, login));
        } else {
          alert('You are not authorized');
        }
      })
      .catch((error) => alert(error));
  };
};

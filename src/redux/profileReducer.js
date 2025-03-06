import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const getProfile = (id) => {
  return (dispatch) => {
    profileAPI
      .getProfile(id)
      .then((value) => {
        dispatch(setUserProfile(value));
      })
      .catch((error) => alert(error));
  };
};

const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI
      .getStatus(id)
      .then((value) => {
        dispatch(setStatus(value));
      })
      .catch((error) => alert(error));
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI
      .updateStatus(status)
      .then((data) => {
        if (!data.resultCode) {
          dispatch(setStatus(status));
        } else {
          throw data.messages;
        }
      })
      .catch((error) => alert(error));
  };
};

const initialState = {
  posts: [
    {
      id: 1,
      text: 'Звук клавиш печатной машинки определил дальнейшее развитие',
      likesCount: 10
    },
    {
      id: 2,
      text: 'Постоянный количественный рост не стал ограничивающим фактором',
      likesCount: 5
    },
    {
      id: 3,
      text: 'Но семантический разбор внешних противодействий не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
      likesCount: 2
    }
  ],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [
          ...state.posts,
          {
            id: Math.max(...state.posts.map((obj) => obj.id)) + 1,
            text: state.newPostText,
            likesCount: 0
          }
        ],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export default profileReducer;

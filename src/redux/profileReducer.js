import API from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

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
  profile: null
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
    default:
      return state;
  }
};

export const getProfile = (id) => {
  return (dispatch) => {
    API.getProfile(id)
      .then((value) => {
        dispatch(setUserProfile(value));
      })
      .catch((error) => alert(error));
  };
};

export default profileReducer;

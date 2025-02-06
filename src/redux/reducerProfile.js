const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});

const reducerProfile = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: Math.max(...state.posts.map((obj) => obj.id)) + 1,
        text: state.newPostText,
        likesCount: 0
      });
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default reducerProfile;

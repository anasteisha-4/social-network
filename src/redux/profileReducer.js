const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
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
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case ADD_POST:
      newState.posts.push({
        id: Math.max(...newState.posts.map((obj) => obj.id)) + 1,
        text: newState.newPostText,
        likesCount: 0
      });
      newState.newPostText = '';
      return newState;
    case UPDATE_NEW_POST_TEXT:
      newState.newPostText = action.text;
      return newState;
    default:
      return newState;
  }
};

export default profileReducer;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
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
    default:
      return state;
  }
};

export default profileReducer;

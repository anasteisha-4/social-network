const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
});

const initialState = {
  users: [
    { id: 1, name: 'Anastasia' },
    { id: 2, name: 'Bogdan' },
    { id: 3, name: 'Polly' }
  ],

  messages: [
    { id: 1, text: 'Доброе утро ❤️', from: 'user' },
    { id: 2, text: 'Доброе утро ❤️', from: 'me' }
  ],

  newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Math.max(...state.messages.map((obj) => obj.id)) + 1,
            text: state.newMessageText,
            from: 'me'
          }
        ],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };
    default:
      return state;
  }
};

export default messagesReducer;

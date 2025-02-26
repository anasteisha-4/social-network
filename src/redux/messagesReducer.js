const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
});

const initialState = {
  users: [
    { id: 1, name: 'Maria' },
    { id: 2, name: 'Victoria' },
    { id: 3, name: 'Kirill' }
  ],

  messages: [
    { id: 1, text: 'Привет, ты дома?', from: 'user' },
    { id: 2, text: 'Привет, да', from: 'me' },
    { id: 3, text: 'Зайду через 10 минут', from: 'user' },
    { id: 4, text: 'Хорошо', from: 'me' }
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

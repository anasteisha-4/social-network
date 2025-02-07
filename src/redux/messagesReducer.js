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
  const newState = structuredClone(state);
  switch (action.type) {
    case SEND_MESSAGE:
      newState.messages.push({
        id: Math.max(...newState.messages.map((obj) => obj.id)) + 1,
        text: newState.newMessageText,
        from: 'me'
      });
      newState.newMessageText = '';
      return newState;
    case UPDATE_NEW_MESSAGE_TEXT:
      newState.newMessageText = action.text;
      return newState;
    default:
      return newState;
  }
};

export default messagesReducer;

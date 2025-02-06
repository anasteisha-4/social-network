const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
});

const reducerMessages = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      state.messages.push({
        id: Math.max(...state.messages.map((obj) => obj.id)) + 1,
        text: state.newMessageText,
        from: 'me'
      });
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export default reducerMessages;

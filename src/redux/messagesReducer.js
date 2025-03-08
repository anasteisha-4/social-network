const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
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
  ]
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
            text: action.message,
            from: 'me'
          }
        ]
      };
    default:
      return state;
  }
};

export default messagesReducer;

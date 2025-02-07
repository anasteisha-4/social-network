import React from 'react';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/messagesReducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';

export default function MessagesContainer(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        const state = store.getState().messages;

        return (
          <Messages
            state={state}
            sendMessage={sendMessage}
            updateNewMessageText={updateNewMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

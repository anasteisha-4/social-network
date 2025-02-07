import React from 'react';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/messagesReducer';
import Messages from './Messages';

export default function MessagesContainer(props) {
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  const state = props.store.getState().messages;

  return (
    <Messages
      state={state}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
}

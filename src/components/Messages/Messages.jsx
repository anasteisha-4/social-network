import React from 'react';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/reducerMessages';
import Message from './Message/Message';
import s from './Messages.module.css';
import User from './User/User';

export default function Messages(props) {
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const updateNewMessageText = (event) => {
    props.dispatch(updateNewMessageTextActionCreator(event.target.value));
  };

  return (
    <div className={s.content}>
      <div className={s.users}>
        {props.state.users.map((obj, key) => (
          <User name={obj.name} id={obj.id} key={key} />
        ))}
      </div>
      <div className={s.messagesBlock}>
        <div className={s.messages}>
          {props.state.messages.map((obj, key) => (
            <Message position={obj.from === 'me' ? 'right' : 'left'} key={key}>
              {obj.text}
            </Message>
          ))}
        </div>
        <textarea
          value={props.state.newMessageText}
          onChange={updateNewMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
}

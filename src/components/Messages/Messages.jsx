import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';
import User from './User/User';

export default function Messages(props) {
  return (
    <div className={s.content}>
      <div className={s.users}>
        {props.users.map((obj, key) => (
          <User name={obj.name} id={obj.id} key={key} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((obj, key) => (
          <Message position={obj.from === 'me' ? 'right' : 'left'} key={key}>
            {obj.text}
          </Message>
        ))}
      </div>
    </div>
  );
}

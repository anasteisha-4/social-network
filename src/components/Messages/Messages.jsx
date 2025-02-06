import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';
import User from './User/User';

export default function Messages(props) {
  const newMessageElement = React.createRef();

  const sendMessage = () => {
    props.dispatch({ type: 'SEND-MESSAGE' });
  };

  const updateNewMessageText = () => {
    props.dispatch({
      type: 'UPDATE-NEW-MESSAGE-TEXT',
      text: newMessageElement.current.value
    });
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
          ref={newMessageElement}
          value={props.state.newMessageText}
          onChange={updateNewMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
}

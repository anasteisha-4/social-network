import React from 'react';
import s from './Message.module.css';

export default function Message(props) {
  return (
    <div
      className={
        s.message + ' ' + (props.position === 'right' ? s.right : s.left)
      }
    >
      {props.children}
    </div>
  );
}

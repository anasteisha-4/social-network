import React from 'react';
import s from './Friend.module.css';

export default function Friend(props) {
  return (
    <div className={s.item}>
      <img src={props.friend.avatar} alt="avatar" />
      <p>{props.friend.name}</p>
    </div>
  );
}

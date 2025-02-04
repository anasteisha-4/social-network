import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
  return (
    <div className={s.item}>
      <img
        src={require('../../../../images/avatar.jpg')}
        alt="avatar"
        className={s.avatar}
      />
      <span>{props.text}</span>
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
}

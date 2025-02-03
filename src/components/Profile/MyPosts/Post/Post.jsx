import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src={require('../../../../images/avatar.jpg')}
        alt="avatar"
        className={s.avatar}
      />
      <span>{props.title}</span>
      <span>{props.text}</span>
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;

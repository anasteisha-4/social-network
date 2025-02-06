import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

export default function Friends(props) {
  return (
    <div className={s.friends}>
      <h2>My friends</h2>
      {props.friends.map((obj, key) => (
        <Friend friend={obj} key={key} />
      ))}
    </div>
  );
}

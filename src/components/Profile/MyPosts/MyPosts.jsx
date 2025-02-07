import React from 'react';

import { addPostActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
  const addPost = () => {
    props.addPost();
  };

  const updateNewPostText = (event) => {
    props.updateNewPostText(event.target.value);
  };

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div className={s.new}>
        <h3>New post</h3>
        <textarea
          value={props.newPostText}
          onChange={updateNewPostText}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {props.posts.map((obj, key) => (
          <Post text={obj.text} likesCount={obj.likesCount} key={key} />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div className={s.new}>
        <h3>New post</h3>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {props.posts.map((obj, key) => (
          <Post text={obj.text} likesCount={obj.likesCount} key={key} />
        ))}
      </div>
    </div>
  );
}

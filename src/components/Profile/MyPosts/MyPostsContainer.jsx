import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {
  const state = props.store.getState().profile;

  const updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      posts={state.posts}
      newPostText={state.newPostText}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  );
}

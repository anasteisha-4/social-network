import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profile;

        const updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            posts={state.posts}
            newPostText={state.newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

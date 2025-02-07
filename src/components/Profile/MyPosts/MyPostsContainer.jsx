import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText(text) {
      dispatch(updateNewPostTextActionCreator(text));
    },

    addPost() {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

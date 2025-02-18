import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText
})(MyPosts);

export default MyPostsContainer;

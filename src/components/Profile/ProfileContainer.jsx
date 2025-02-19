import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  let { id } = useParams();
  if (!id) {
    id = props.myId;
  }
  useEffect(() => {
    fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => response.json())
      .then((value) => {
        props.setUserProfile(value);
      })
      .catch((error) => alert(error));
  }, [id]);

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myId: state.auth.id
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  let { id } = useParams();
  if (!id) {
    id = props.myId;
  }
  useEffect(() => {
    props.getProfile(id);
  }, [id]);

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myId: state.auth.id
});

export default connect(mapStateToProps, { getProfile })(ProfileContainer);

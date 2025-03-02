import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
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

  if (props.isAuth === false) {
    return <Navigate to="/login" />;
  }

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getProfile })(ProfileContainer);

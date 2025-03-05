import { compose } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
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
  myId: state.auth.id,
});

export default compose(connect(mapStateToProps, { getProfile }), withAuthNavigate)(ProfileContainer);
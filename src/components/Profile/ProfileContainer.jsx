import { compose } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import {
  getProfile,
  getStatus,
  updateStatus
} from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  let { id } = useParams();
  if (!id) {
    id = props.myId;
  }
  useEffect(() => {
    props.getProfile(id);
    props.getStatus(id);
  }, [id]);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      isMyProfile={id === props.myId}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myId: state.auth.id,
  status: state.profile.status
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withAuthNavigate
)(ProfileContainer);

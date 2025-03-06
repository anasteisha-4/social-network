import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthNavigate = (Component) => {
  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
  });

  const NavigateComponent = (props) =>
    props.isAuth ? <Component {...props} /> : <Navigate to="/login" />;
  return connect(mapStateToProps)(NavigateComponent);
};

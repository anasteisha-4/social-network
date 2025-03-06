import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthNavigate = (Component) => {
  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isAuthFetching: state.auth.isFetching
  });

  const NavigateComponent = (props) => {
    if (props.isAuthFetching) {
      return null;
    } else if (props.isAuth) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
  return connect(mapStateToProps)(NavigateComponent);
};

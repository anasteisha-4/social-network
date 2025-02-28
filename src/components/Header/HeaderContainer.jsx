import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getMe();
  }, []);
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getMe })(HeaderContainer);

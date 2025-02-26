import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../api/api';
import { setAuthUserData } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    getMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          props.setAuthUserData(id, email, login);
        } else {
          alert('You are not authorized');
        }
      })
      .catch((error) => alert(error));
  }, []);
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

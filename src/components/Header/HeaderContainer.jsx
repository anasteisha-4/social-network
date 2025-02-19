import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      credentials: 'include'
    })
      .then((response) => response.json())
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

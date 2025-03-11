import { Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import { loginSchema } from '../../utils/validators';
import { InputField } from '../common/Form fields/FormFields';
import s from './Login.module.css';

const LoginForm = (props) => {
  const onSubmit = (formData, actions) => {
    props.login(formData);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(selfProps) => {
        return (
          <>
            <Form onSubmit={selfProps.handleSubmit}>
              <InputField
                label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <InputField
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <InputField
                label="Remember me"
                id="rememberMe"
                type="checkbox"
                name="rememberMe"
                className={s.checkbox}
              />

              <button type="submit" disabled={selfProps.isSubmitting}>
                Login
              </button>
            </Form>
            {props.loginSubmitted ? (
              <p className={s['success-log']}>You logged successfully!</p>
            ) : props.errorMessage ? (
              <p className={s['error-log']}>{props.errorMessage}</p>
            ) : (
              <></>
            )}
          </>
        );
      }}
    </Formik>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
  loginSubmitted: state.auth.loginSubmitted
});

export default connect(mapStateToProps, { login })(Login);

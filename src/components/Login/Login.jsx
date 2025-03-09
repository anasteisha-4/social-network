import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { authAPI } from '../../api/api';
import { loginSchema } from '../../utils/validators';
import { InputField } from '../common/Form fields/FormFields';
import s from './Login.module.css';

const LoginForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (formData, actions) => {
    authAPI
      .login(formData)
      .then((data) => {
        if (!data.resultCode) {
          setErrorMessage('');
          setSubmitted(true);
        } else {
          throw data.messages[0];
        }
      })
      .catch((error) => setErrorMessage(error.toString()))
      .finally(() => actions.resetForm());
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
      {(props) => {
        return (
          <>
            <Form onSubmit={props.handleSubmit}>
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

              <button type="submit" disabled={props.isSubmitting}>
                Login
              </button>
            </Form>
            {isSubmitted ? (
              <p className={s['success-log']}>You logged successfully!</p>
            ) : errorMessage ? (
              <p className={s['error-log']}>{errorMessage}</p>
            ) : (
              <></>
            )}
          </>
        );
      }}
    </Formik>
  );
};

export default function Login(props) {
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

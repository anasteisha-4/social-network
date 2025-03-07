import { Form, Formik, useField } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { authAPI } from '../../api/api';
import s from './Login.module.css';

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className ? props.className : ''}>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? s['input-error'] : ''}
      />
      {meta.error && meta.touched ? (
        <p className={s['error-message']}>{meta.error}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

const LoginForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter valid email')
      .required('Field is required'),
    password: yup.string().required('Field is required')
  });

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
      validationSchema={formSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <>
            <Form onSubmit={props.handleSubmit}>
              <FormField
                label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <FormField
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormField
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

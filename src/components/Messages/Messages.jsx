import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { TextAreaField } from '../Form fields/FormFields';
import Message from './Message/Message';
import s from './Messages.module.css';
import User from './User/User';

const AddMessageForm = (props) => {
  const [isSubmitted, setSubmitted] = useState(false); // will be used later

  const messageSchema = yup.object().shape({
    message: yup.string().trim().required("Message mustn't be empty")
  });

  const onSubmit = (data, actions) => {
    props.sendMessage(data.message);
    actions.resetForm();
    setSubmitted(true);
  };

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={messageSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <Form onSubmit={props.handleSubmit}>
            <TextAreaField
              name="message"
              placeholder="Enter your message"
              isSubmitting={props.isSubmitting}
            />
            <button type="submit" disabled={props.isSubmitting}>
              Send message
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default function Messages(props) {
  return (
    <div className={s.content}>
      <div className={s.users}>
        {props.state.users.map((obj, key) => (
          <User name={obj.name} id={obj.id} key={key} />
        ))}
      </div>
      <div className={s.messagesBlock}>
        <div className={s.messages}>
          {props.state.messages.map((obj, key) => (
            <Message position={obj.from === 'me' ? 'right' : 'left'} key={key}>
              {obj.text}
            </Message>
          ))}
        </div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
}

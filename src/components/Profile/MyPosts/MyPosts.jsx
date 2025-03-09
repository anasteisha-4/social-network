import React, { useState } from 'react';

import { Form, Formik } from 'formik';
import { requiredStringSchema } from '../../../utils/validators';
import { TextAreaField } from '../../common/Form fields/FormFields';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const NewPostForm = (props) => {
  const [isSubmitted, setSubmitted] = useState(false); // will be used later

  const onSubmit = (data, actions) => {
    props.addPost(data.text);
    actions.resetForm();
    setSubmitted(true);
  };

  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={requiredStringSchema('text')}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <Form onSubmit={props.handleSubmit}>
            <TextAreaField
              name="text"
              placeholder="What's new?"
              isSubmitting={props.isSubmitting}
            />
            <button type="submit" disabled={props.isSubmitting}>
              Add post
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default function MyPosts(props) {
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div className={s.new}>
        <h3>New post</h3>
        <NewPostForm addPost={props.addPost} />
      </div>
      <div className={s.posts}>
        {props.posts.map((obj, key) => (
          <Post text={obj.text} likesCount={obj.likesCount} key={key} />
        ))}
      </div>
    </div>
  );
}

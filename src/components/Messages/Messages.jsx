import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const User = (props) => {
  const setActiveClassName = (navData) =>
    s.user + (navData.isActive ? ' ' + s.active : '');
  return (
    <NavLink to={`/messages/${props.id}`} className={setActiveClassName}>
      <img
        src="https://smartprogress.do/uploadImages/001832188.jpg"
        alt="cat programmer"
      />
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return (
    <div
      className={
        s.message + ' ' + (props.position === 'right' ? s.right : s.left)
      }
    >
      {props.children}
    </div>
  );
};

const Messages = (props) => {
  return (
    <div className={s.content}>
      <div className={s.users}>
        <User name="Anastasia" id="1" active />
        <User name="Bogdan" id="2" />
        <User name="Polly" id="3" />
      </div>
      <div className={s.messages}>
        <Message position="left">Привет! Как дела? </Message>
        <Message position="right">
          Здравствуй! Я учу React, уже на 21 уроке
        </Message>
        <Message position="left">Ничего себе! Молодец)</Message>
      </div>
    </div>
  );
};

export default Messages;

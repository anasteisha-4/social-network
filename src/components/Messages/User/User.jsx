import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

export default function User(props) {
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
}

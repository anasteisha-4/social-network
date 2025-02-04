import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './/Navbar.module.css';

export default function Navbar() {
  const setActiveClassName = (navData) => (navData.isActive ? s.active : '');

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={setActiveClassName}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/messages" className={setActiveClassName}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={setActiveClassName}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music" className={setActiveClassName}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings" className={setActiveClassName}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/240px-Yandex_icon.svg.png"
        alt="yandex"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <>
            <button onClick={props.logout}>Logout</button>
          </>
        ) : (
          <button>
            <NavLink to={'/login'}>Login</NavLink>
          </button>
        )}
      </div>
    </header>
  );
}

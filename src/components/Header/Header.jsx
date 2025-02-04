import React from 'react';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/240px-Yandex_icon.svg.png"
        alt="yandex"
      ></img>
    </header>
  );
}

import React from 'react';
import Friends from './Friends/Friends';
import Navbar from './Navbar/Navbar';
import s from './Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <div className={s.side}>
      <Navbar />
      <Friends friends={props.friends} />
    </div>
  );
}

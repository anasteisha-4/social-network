import React from 'react';
import StoreContext from '../../StoreContext';
import Friends from './Friends/Friends';
import Navbar from './Navbar/Navbar';
import s from './Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return (
          <div className={s.side}>
            <Navbar />
            <Friends friends={store.getState().sidebar.friends} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
}

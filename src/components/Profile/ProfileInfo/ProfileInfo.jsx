import React from 'react';
import s from './ProfileInfo.module.css';

export default function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img
          className={s.background}
          src="https://i.pinimg.com/originals/c0/50/3d/c0503d6c7d61c9a6f0f8eb2752e450e2.jpg"
          alt="background sea"
        />
      </div>
      <div className={s.descriptionBlock}>avatar + descr</div>
    </div>
  );
}

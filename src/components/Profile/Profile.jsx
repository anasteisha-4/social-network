import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.background}
          src="https://i.pinimg.com/originals/c0/50/3d/c0503d6c7d61c9a6f0f8eb2752e450e2.jpg"
          alt="background sea"
        />
      </div>
      <div>avatar + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

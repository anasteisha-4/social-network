import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.content}>
      <div>
        <img
          src="https://i.pinimg.com/originals/c0/50/3d/c0503d6c7d61c9a6f0f8eb2752e450e2.jpg"
          alt="background sea"
        />
      </div>
      <div>avatar + descr</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

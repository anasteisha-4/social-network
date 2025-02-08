import React from 'react';
import avatar1 from '../../images/1.jpg';
import avatar2 from '../../images/2.jpg';
import avatar3 from '../../images/3.jpg';
import avatar5 from '../../images/5.jpg';
import s from './Users.module.css';

export default function Users(props) {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Bob Smith',
        status: 'Coffee first, then code.',
        location: {
          city: 'London',
          country: 'UK'
        },
        followed: true,
        avatar: avatar1
      },
      {
        id: 2,
        fullName: 'Alice Johnson',
        status: 'Living my best life!',
        location: {
          city: 'New York',
          country: 'USA'
        },
        followed: true,
        avatar: avatar2
      },
      {
        id: 3,
        fullName: 'Charlie Brown',
        status: 'Dream big, work hard.',
        location: {
          city: 'Toronto',
          country: 'Canada'
        },
        followed: false,
        avatar: avatar3
      },
      {
        id: 4,
        fullName: 'Diana Miller',
        status: 'Exploring the world, one city at a time.',
        location: {
          city: 'Berlin',
          country: 'Germany'
        },
        followed: true,
        avatar:
          'https://pm1.aminoapps.com/7099/7d9e3d87e3e0bb58e097e2f974cfefe859d85eacr1-960-960v2_hq.jpg'
      },
      {
        id: 5,
        fullName: 'Ethan Wilson',
        status: 'Music is my escape.',
        location: {
          city: 'Sydney',
          country: 'Australia'
        },
        followed: false,
        avatar: avatar5
      }
    ]);
  }

  return (
    <div className={s.content}>
      {props.users.map((user) => (
        <div className={s.item} key={user.id}>
          <div>
            <img src={user.avatar} alt="avatar" />
            {user.followed ? (
              <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(user.id)}>Follow</button>
            )}
          </div>
          <div>
            <div>
              <h4>{user.fullName}</h4>
              <p className={s.status}>{user.status}</p>
            </div>
            <div className={s.location}>
              {user.location.city}, {user.location.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

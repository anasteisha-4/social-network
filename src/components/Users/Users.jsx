import React, { useEffect } from 'react';
import defaultAvatar from '../../images/default.jpg';
import s from './Users.module.css';

export default function Users(props) {
  useEffect(() => {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
    )
      .then((response) => response.json())
      .then((value) => {
        props.setUsers(value.items);
        props.setTotalUsersCount(value.totalCount);
      })
      .catch((error) => alert(error));
  }, []);

  // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pagesCount = 20;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const changePage = (page) => {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${page}`
    )
      .then((response) => response.json())
      .then((value) => {
        props.setUsers(value.items);
        props.setCurrentPage(page);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className={s.pages}>
        {pages.map((page) => (
          <div
            key={page}
            className={page === props.currentPage ? s.active : ''}
            onClick={() => changePage(page)}
          >
            {page}
          </div>
        ))}
      </div>
      <div className={s.content}>
        {props.users.map((user) => (
          <div className={s.item} key={user.id}>
            <div>
              <img
                src={user.photos.large ?? user.photos.small ?? defaultAvatar}
                alt="avatar"
              />
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
            <div>
              <div>
                <h4>{user.name}</h4>
                <p className={s.status}>{user.status ?? 'status'}</p>
              </div>
              <div className={s.location}>
                {user.location?.city ?? 'city'},{' '}
                {user.location?.country ?? 'country'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

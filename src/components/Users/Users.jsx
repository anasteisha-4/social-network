import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../images/default.jpg';
import s from './Users.module.css';

export default function Users(props) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  const startPage = Math.max(1, props.currentPage - 2);
  const endPage = Math.min(pagesCount, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const changePage = (page) => {
    if (page >= 1 && page <= pagesCount) {
      props.changePage(page);
    }
  };

  const incrementPage = () => {
    if (props.currentPage < pagesCount) {
      props.changePage(props.currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (props.currentPage > 1) {
      props.changePage(props.currentPage - 1);
    }
  };

  return (
    <div className={s.content}>
      <div className={s.pages}>
        {pages.length !== 0 && (
          <div
            onClick={decrementPage}
            className={props.currentPage > 1 || s.disabled}
          >
            {'<'}
          </div>
        )}

        {pages.map((page) => (
          <div
            key={page}
            className={page === props.currentPage ? s.current : ''}
            onClick={() => changePage(page)}
          >
            {page}
          </div>
        ))}
        {pages.length !== 0 && (
          <div
            onClick={incrementPage}
            className={props.currentPage < pagesCount || s.disabled}
          >
            {'>'}
          </div>
        )}
      </div>

      <div className={s.users}>
        {props.users.map((user) => (
          <div className={s.item} key={user.id}>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.large ?? user.photos.small ?? defaultAvatar}
                  alt="avatar"
                />
              </NavLink>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <h4>{user.name}</h4>
              <p className={s.status}>{user.status ?? ''}&nbsp;</p>

              <div className={s.location}>
                {user.location?.city ?? ''}
                {user.location?.country ? `, ${user.location?.country}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

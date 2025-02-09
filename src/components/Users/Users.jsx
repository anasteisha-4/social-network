import React, { useEffect } from 'react';
import defaultAvatar from '../../images/default.jpg';
import s from './Users.module.css';

export default function Users(props) {
  useEffect(() => {
    props.setCurrentPage(1);
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

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  const startPage = Math.max(1, props.currentPage - 2);
  const endPage = Math.min(pagesCount, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const changePage = (page) => {
    if (page >= 1 && page <= pagesCount) {
      fetch(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${page}`
      )
        .then((response) => response.json())
        .then((value) => {
          props.setUsers(value.items);
          props.setCurrentPage(page);
        })
        .catch((error) => alert(error));
    }
  };

  const incrementPage = () => {
    if (props.currentPage < pagesCount) {
      changePage(props.currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (props.currentPage > 1) {
      changePage(props.currentPage - 1);
    }
  };

  return (
    <div className={s.content}>
      <div className={s.pages}>
        <div
          onClick={decrementPage}
          className={props.currentPage > 1 || s.disabled}
        >
          {'<'}
        </div>
        {pages.map((page) => (
          <div
            key={page}
            className={page === props.currentPage ? s.current : ''}
            onClick={() => changePage(page)}
          >
            {page}
          </div>
        ))}
        <div
          onClick={incrementPage}
          className={props.currentPage < pagesCount || s.disabled}
        >
          {'>'}
        </div>
      </div>

      <div className={s.users}>
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
    </div>
  );
}

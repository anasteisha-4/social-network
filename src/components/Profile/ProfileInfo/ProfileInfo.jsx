import React from 'react';
import defaultAvatar from '../../../images/default.jpg';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

export default function ProfileInfo(props) {
  const profile = props.profile;
  return !props.profile ? (
    <Preloader />
  ) : (
    <>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos?.large || profile.photos?.small || defaultAvatar}
          alt="avatar"
        />
        <div className={s.textInfo}>
          <h1>{profile.fullName}</h1>
          <ProfileStatus
            status={props.status}
            isMyProfile={props.isMyProfile}
            updateStatus={props.updateStatus}
          />
          {profile.aboutMe ? (
            <p className={s.about}>
              <span style={{ fontWeight: 'bold' }}> Обо мне:</span>{' '}
              {profile.aboutMe}
            </p>
          ) : (
            <></>
          )}
          <div>
            Я{' '}
            <span style={{ fontWeight: 'bold' }}>
              {!profile.lookingForAJob ? 'не' : ''} ищу работу
            </span>
            {profile.lookingForAJobDescription ? (
              <>{`: ${profile.lookingForAJobDescription}`}</>
            ) : (
              <></>
            )}
          </div>
          {profile.contacts &&
          Object.keys(profile.contacts).length &&
          Object.values(profile.contacts).some((value) => value !== null) ? (
            <div className={s.contacts}>
              <h4>Контакты:</h4>
              {Array.from(Object.entries(profile.contacts)).map((value) => {
                return !value[1] ? (
                  <></>
                ) : (
                  <div key={value[0]}>
                    <span
                      style={{ fontWeight: 'bold' }}
                    >{`${value[0]}:\t`}</span>
                    {`${value[1]}`}
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

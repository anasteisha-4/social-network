import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

export default function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const toggleEditMode = () => {
    if (editMode) {
      props.updateStatus(status);
    }
    setEditMode(!editMode);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  useEffect(() => {
    if (status !== props.status) {
      setStatus(props.status);
    }
  }, [props.status]);

  return (
    <div className={s.status + (props.isMyProfile ? ' ' + s['my-status'] : '')}>
      {editMode ? (
        <input
          onDoubleClick={toggleEditMode}
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              toggleEditMode();
            }
          }}
          autoFocus={true}
          value={status}
          onChange={onStatusChange}
        />
      ) : props.status ? (
        <p
          onDoubleClick={() => {
            if (props.isMyProfile) toggleEditMode();
          }}
        >
          <span style={{ fontWeight: 800 }}>Статус:</span> {props.status}
        </p>
      ) : props.isMyProfile ? (
        <p onDoubleClick={toggleEditMode}>Установить статус</p>
      ) : (
        <></>
      )}
    </div>
  );
}

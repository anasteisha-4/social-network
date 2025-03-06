import React, { useState } from 'react';
import s from './ProfileStatuse.module.css';

export default function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={s.status}>
      {editMode ? (
        <input
          onDoubleClick={toggleEditMode}
          onBlur={toggleEditMode}
          autoFocus={true}
          value={props.status}
        />
      ) : (
        <p onDoubleClick={toggleEditMode}>{props.status}</p>
      )}
    </div>
  );
}

import React from 'react';
import preloader from '../../images/preloader.svg';
import s from './Preloader.module.css';

export default function Preloader(props) {
  return <img src={preloader} alt="preloader" className={s.preloader} />;
}

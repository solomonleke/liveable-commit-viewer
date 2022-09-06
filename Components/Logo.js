import React from 'react';
import styles from '../styles/Home.module.css'

export default function Logo({onClick}) {
  return (
    <div className={styles.logoText} onClick={onClick}>
         CommitViewer
    </div>
  );
}

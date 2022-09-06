import React from 'react';
import styles from '../styles/Home.module.css'

export default function CommitCard() {
  return (
    <div className={styles.CommitGroup}>
      <div className={styles.userGroup}>
        <div className={styles.avatar}></div>
        <div className={styles.userName}>gaearon</div>
      </div>

      <p className={styles.commitMsg}>
         Log all errors to console.error by default (#21130)
      </p>
      <p className={styles.commitDate}>
             23:30 28/04/2021
      </p>


    </div>
  );
}

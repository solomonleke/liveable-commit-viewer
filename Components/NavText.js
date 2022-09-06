import React from 'react';
import styles from '../styles/Home.module.css'
export default function NavText({text}) {
  return (
    <div className={styles.navText}>
       {text}
    </div>
  );
}

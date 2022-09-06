import React from 'react';
import styles from '../styles/Home.module.css'


export default function SuggestedCard({text, onClick}) {
  return (
    <span className={styles.singleSuggested} onClick={onClick}>
     {text}
    </span>
  );
}

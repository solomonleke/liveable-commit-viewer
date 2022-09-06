import React, { Children } from 'react';
import styles from '../styles/Home.module.css'
import { IoMdJet } from "react-icons/io";



export default function Button({onClick, children}) {
  return (

    <button onClick={onClick} className={styles.btn}>
        {children} <span className={styles.btnIcon}>  <IoMdJet/></span>
    </button>
  );
}

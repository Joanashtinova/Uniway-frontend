import Image from 'next/image';
import React from 'react';
import styles from './Global.module.css';

function Video(props) {
  return (
    <div>
        <img className={styles.imageContainer} src={props.image}/>
        <h1 className={styles.title}>{props.title}</h1>
    </div>
  )
}

export default Video; 
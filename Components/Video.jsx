import Image from 'next/image';
import React from 'react';
import styles from './Global.module.css';

function Video(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <img className={styles.imageContainer} src={props.image}/>
    </div>
  )
}

export default Video; 
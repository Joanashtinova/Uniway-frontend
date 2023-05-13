import Image from 'next/image';
import React from 'react';
import styles from './Global.module.css';
import Link from 'next/link';

function Video(props) {
  return (
    <div>
        <img className={styles.imageContainer} src={props.image}/>
       <Link href={"/video/"+ props.title.toLowerCase()}><h1 className={styles.title}>{props.title}</h1></Link> 
    </div>
  )
}

export default Video; 
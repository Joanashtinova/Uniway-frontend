import React from 'react';
import styles from './Global.module.css';
import Video from './Video.jsx';

function HomeComponent() {
  return (
    <div className={styles.videoContainer}>
        <Video title = "programming" image = "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"/>
        <Video title = "entr" image = "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"/>
        <Video title = "Психология" image = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"/>
        <Video title = "Медицина" image = "https://img.noblechairs.com/lp/hero-ironman-edition/ironman_banner.jpg" />
    </div>
  )
}


export default HomeComponent; 


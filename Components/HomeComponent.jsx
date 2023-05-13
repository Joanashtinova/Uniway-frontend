import React from 'react';
import Video from './Video';
import styles from './Global.module.css';

function HomeComponent() {
  return (
    <div className={styles.videoContainer}>
        <Video title = "Batman" image = "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"/>
        <Video title = "Superman" image = "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"/>
        <Video title = "Spider-man" image = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"/>
        <Video title = "Ironman" image = "https://img.noblechairs.com/lp/hero-ironman-edition/ironman_banner.jpg" />
    </div>
  )
}

export default HomeComponent; 
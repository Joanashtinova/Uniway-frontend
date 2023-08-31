import Image from "next/image";
import React from "react";
import styles from "./Global.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

function Video(props) {
  return (
    <div className={styles.video_ThmbHorizontal}>
      <Link
        href={"/videos/" + props.id.toLowerCase()}
        className={styles.title_link}
      >
        <img className={styles.imageContainer} src={props.image} />
        <h1 className={styles.title}>{props.title}</h1>
      </Link>
    </div>
  );
}

export default Video;

import React from "react";
import styles from "./Global.module.css";

function Article(props) {
  return (
    <div>
      <p className={styles.bubbleContent}>{props.text}</p>
    </div>
  );
}

export default Article;

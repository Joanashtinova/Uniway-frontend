import React from "react";
import styles from "./Global.module.css";

import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Article(props) {
  let text = props.text?.toString();

  return (
    <div>
      <div className={styles.bubbleContent}>
        <ReactMarkdown
          className={styles.foo}
          children={text}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
}

export default Article;

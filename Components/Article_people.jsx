import React from "react";
import styles from "./Global.module.css";

import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Article_people(props) {
  let text = props.text?.toString();
  let person_name = props.person_name?.toString();

  return (
    <div>
      <div className={styles.bubbleCon}>
        <div>
          <h1 className={styles.person_name}>{person_name}</h1>
        </div>
        <ReactMarkdown
          className={styles.balon}
          children={text}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
}

export default Article_people;

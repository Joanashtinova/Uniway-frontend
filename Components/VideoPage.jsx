import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { collection, getDocs, query, limit, where } from "firebase/firestore";
import { db, storage } from "@/Global/firebase";
import { Style } from "@mui/icons-material";
import styles from "./Global.module.css";
import { Grid } from "@mui/material";
import Video from "@/Components/Video";
import Article from "./Article";

export default function VideoPage(props) {
  const [video, setVideo] = useState({});

  const fetchData = async (title) => {
    const q = query(
      collection(db, "videos"),
      where("id", "==", title.toLowerCase()),
      limit(1)
    );
    const data = await getDocs(q);
    const videoData = data.docs.map((doc) => doc.data())[0]; // get the first video
    setVideo(videoData);
    console.log(videoData);
  };

  useLayoutEffect(() => {
    //router.query.id is the name from the url

    fetchData(props.id);
  }, [props.id]);

  return (
    <div style={{ height: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: "150px" }}>
          <iframe
            // className={styles.bubbleContainer}
            width="100%"
            height="100%"
            // height="650px"
            src={video.video_url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encryptet-media;
              gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h1 style={{ fontFamily: "Arial, sans-serif" }}>{video.title}</h1>
        </Grid>

        <Grid item xs={12} md={6}>
          <Article text={video.article_text} style={{ width: "400px" }} />
        </Grid>
        <Grid item xs={19} md={6}></Grid>
      </Grid>
    </div>
  );
}

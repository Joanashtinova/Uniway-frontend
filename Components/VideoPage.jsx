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
    <div style={{ height: "100%", width: "90%", margin: "0 auto" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            marginTop: "33px",

            borderRadius: "10%",
          }}
        >
          <iframe
            // className={styles.bubbleContainer}
            width="100%"
            className={styles.video}
            src={video.video_url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encryptet-media;
              gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h1 style={{ fontFamily: "Arial, sans-serif" }}>{video.title}</h1>
        </Grid>

        <Grid item xs={12} md={4}></Grid>

        <Grid item xs={12} md={8}>
          <Article text={video.article_text} />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </div>
  );
}

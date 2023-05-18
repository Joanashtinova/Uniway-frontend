import React from "react";
import styles from "./Global.module.css";
import Video from "./Video.jsx";
import Link from "next/link";
import { Grid } from "@mui/material";

function RowComponent(props) {
  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{ marginBottom: "20px" }}>
          <Link href={"/videos"}>Виж всички видеа</Link>
        </Grid>

        {props.videos.map((video) => {
          <Grid>className={styles.videoContainer}</Grid>;
          return (
            <Grid item xs={6} md={3}>

              <Video
                title={video.title}
                image={video.tumbnail_url}
                id={video.id}
              />

            </Grid>
          );
        })}
      </Grid>

    </div>
  );
}

export default RowComponent;

import React from "react";
import styles from "./Global.module.css";
import Video from "./Video.jsx";
import Link from "next/link";
import { Grid } from "@mui/material";
import button from "../public/images/buton.png";
import Image from "next/image";

function RowComponent(props) {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} style={{ marginBottom: "-120px" }}>
          <Link href={"/videos"} style={{ marginTop: "-7rem" }}>
            <Image
              src={button}
              className={styles.ButtonHomepageWij}
              alt="button"
            />
          </Link>
        </Grid>

        {props.videos.map((video) => {
          return (
            <Grid
              style={{
                display: "flex",
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
              }}
              item
              xs={12}
              md={3}
            >
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

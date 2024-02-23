//this is specialnosti Page/
import React, { useLayoutEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./Global.module.css";

export default function Videos(pros) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [specialnost, setSpecialnost] = useState([]);

  const fetchData = async () => {
    const data = await getDocs(query(collection(db, "videos")));
    const videosData = data.docs.map((doc) => doc.data());

    // Filter videos that have the specialnost property
    const specialnostVideos = videosData.filter((video) => video.specialnost);

    const uniqueSpecialnosti = new Set(
      specialnostVideos.map((x) => x.specialnost)
    );

    setVideos(specialnostVideos);
    setFilteredVideos(specialnostVideos);
    setSpecialnost(Array.from(uniqueSpecialnosti));
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#087e8b",
        top: "0",
        position: "absolute",
        minWidth: "98.9vw",
        marginTop: "0px",
      }}
    >
      {specialnost.map((specialnost) => (
        <div key={specialnost} style={{ marginTop: "150px" }}>
          <h3 className={styles.ButtonSpez}>{specialnost}</h3>
          <Grid container spacing={-22} style={{ margin: "0 auto" }}>
            {filteredVideos
              .filter((video) => video.specialnost === specialnost)
              .map((video) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={video.id}
                  className={styles.VideoSrez}
                >
                  <Video
                    title={video.title}
                    image={video.tumbnail_url}
                    id={video.id}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}

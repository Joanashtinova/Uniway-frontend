//this is videos Page/
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
  const [universities, setUniversities] = useState([]);

  const fetchData = async () => {
    const data = await getDocs(query(collection(db, "videos")));
    const videosData = data.docs.map((doc) => doc.data());

    // Filter videos that have the university property
    const universityVideos = videosData.filter((video) => video.university);

    setVideos(universityVideos);
    setFilteredVideos(universityVideos);
    setUniversities(universityVideos.map((x) => x.university));
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid style={{ marginTop: "40px" }} container spacing={2}>
        {universities.map((university) => {
          return (
            <Grid item xs={12} key={university}>
              <h3 className={styles.zaglawieuni}>{university}</h3>
              {filteredVideos
                .filter((video) => video.university === university)
                .map((video) => (
                  <Grid item xs={12} md={3} key={video.id}>
                    <Video
                      title={video.title}
                      image={video.tumbnail_url}
                      id={video.id}
                    />
                  </Grid>
                ))}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

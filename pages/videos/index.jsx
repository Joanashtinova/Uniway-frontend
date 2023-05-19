//this is videos Page/
import React, { useLayoutEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Videos(pros) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  const handleNewSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      let newVideos = videos;

      newVideos = newVideos.filter((x) =>
        x.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredVideos(newVideos);
    } else {
      setFilteredVideos(videos);
    }
  };

  const fetchData = async () => {
    const data = await getDocs(query(collection(db, "videos")));
    setVideos(data.docs.map((doc) => doc.data()));
    setFilteredVideos(data.docs.map((doc) => doc.data()));
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{ marginTop: "150px" }}>
          <SearchComponent videos={videos} handleNewSearch={handleNewSearch} />
        </Grid>
        {filteredVideos.map((video) => (
          <Grid item xs={6} md={3} key={video.id}>
            <Video
              title={video.title}
              image={video.tumbnail_url}
              id={video.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

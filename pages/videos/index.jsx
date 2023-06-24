//this is videos Page/
import React, { useLayoutEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import ButtonUni from "../../Components/UI elemnts/buttonUni";
import ButtonSpec from "../../Components/UI elemnts/buttonSpec";
import Link from "next/link";
export default function Universities() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  const handleNewSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      let newVideos = videos;

      newVideos = newVideos.filter(
        (x) =>
          x.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          x.categories
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
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

  const handleSearchKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleNewSearch(event.target.value);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#83c5d2",
        top: "0",
        position: "absolute",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{ marginTop: "150px" }}>
          <SearchComponent
            videos={videos}
            handleNewSearch={handleNewSearch}
            onKeyUp={handleSearchKeyUp}
          />
          <h5
            style={{ marginLeft: "30px", fontWeight: "90px", color: "#1d3354" }}
          >
            Открии стоя/та:
          </h5>
          <Link href={"/universities"}>
            <ButtonUni />
          </Link>
          <ButtonSpec />
        </Grid>
        {filteredVideos.map((video) => (
          <Grid item xs={12} md={3} key={video.id}>
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

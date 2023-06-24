import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const router = useRouter();
  const { query } = router;

  const fetchData = async () => {
    const data = await getDocs(collection(db, "videos"));
    setVideos(data.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const { search } = query;
    if (search) {
      const searchTerm = search.toString();
      const newVideos = videos
        .filter((x) => x.title !== undefined && x.categories !== undefined)
        .filter(
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
  }, [videos, query]);

  return (
    <div style={{ height: "100%" }}>
      <Grid container spacing={2}>
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

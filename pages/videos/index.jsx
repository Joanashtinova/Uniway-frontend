import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";
import { Grid } from "@mui/material";
import ButtonUni from "../../Components/UI elemnts/buttonUni";
import ButtonSpec from "../../Components/UI elemnts/buttonSpec";
import Link from "next/link";
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
    <div
      style={{
        // height: "1000vh",
        width: "100%",
        backgroundColor: "#83c5d2",
        top: "0",
        position: "absolute",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{ marginTop: "150px" }}>
          <h5
            style={{ marginLeft: "30px", fontWeight: "90px", color: "#1d3354" }}
          >
            Открии своя/та:
          </h5>
          <Link href={"/universities"}>
            <ButtonUni />
          </Link>{" "}
          <Link href={"/specialnosti"}>
            <ButtonSpec />
          </Link>
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

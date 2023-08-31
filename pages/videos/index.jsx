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
import styles from "../../Components/Global.module.css";

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
      className={styles.background}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={-15}
        style={{
          display: "flex",
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            marginTop: "150px",
            // display: "flex",
            // justifyContent: "center", // Center content horizontally
            // alignItems: "center", // Center content vertically
          }}
        >
          <h5
            style={{
              marginLeft: "30px",
              fontWeight: "90px",
              color: "#1d3354",
            }}
          >
            Открий своя/та:
          </h5>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
              <Link href={"/universities"}>
                <ButtonUni height={51} width={280} />
              </Link>{" "}
            </div>
            <div className={styles.buttonWrapper}>
              <Link href={"/specialnosti"}>
                <ButtonSpec height={51} width={280} />
              </Link>
            </div>
          </div>
        </Grid>
        {filteredVideos.map((video) => (
          <Grid
            item
            xs={12}
            md={3}
            key={video.id}
            style={{
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
            }}
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
  );
}

import React from "react";
import styles from "./Global.module.css";
import Video from "./Video.jsx";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import SearchComponent from "@/Components/search";
import RowComponent from "./RowComponent";
import Logo from "../public/images/logo.png";
import Homeimage1 from "./Homeimage1";
import Nananan from "../public/images/burrrrrr.png";
import Image from "next/image";
import Izgledaj from "../public/images/izgledaj.png";
import Momiche from "../public/images/image_home.png";
import blabla from "../public/images/lll.png";
import TextJ from "../public/images/text.png";

function HomeComponent() {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const data = await getDocs(query(collection(db, "videos"), limit(4)));
    setVideos(data.docs.map((doc) => doc.data()));
    console.log(data.docs);
    console.log(videos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HomeComponent = ({ videos }) => {
    return (
      <div>
        <div
          className={styles.hero_image}
          style={{
            backgroundColor: "#adf7b6",
            height: "900px",
            width: "100%",
          }}
        >
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <img
                className={styles.bla}
                src={Nananan}
                alt="Nananan"
                width={500}
                height={200}
              />
            </div>
            <div className={styles.grid_item}>
              <img
                className={styles.Momiche}
                src={Momiche}
                alt="Momiche"
                width={600}
                height={600}
              />
            </div>

            <h4 className={styles.teeext}>
              Най-доброто за един млад човек е ... Вдъхновението! Всяко наше
              видео ви дава точно това.
            </h4>
          </div>
          <div
            className={styles.hero_body}
            style={{
              backgroundColor: "#087e8b",
              height: "130%",
              width: "100%",
              marginTop: "-5rem",
            }}
          >
            <Grid item xs={12} md={3} className={styles.grid_container}>
              <div className={styles.grid_item}>
                <img
                  className={styles.izgledaj}
                  src={Izgledaj}
                  alt="Izgledaj"
                  width={500}
                  height={150}
                />
              </div>
              <div className={styles.grid_item}>
                <img
                  className={styles.lll}
                  src={blabla}
                  alt="blabla"
                  width={600}
                  height={600}
                />
              </div>
              <div className={styles.grid_item}>
                <RowComponent className={styles.videobox} videos={videos} />
              </div>
            </Grid>
          </div>
        </div>
      </div>
    );
  };
}

export default HomeComponent;

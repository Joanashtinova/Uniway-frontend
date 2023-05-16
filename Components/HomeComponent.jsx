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

  return (
    <div>
      <div className={styles.hero_image} style={{ backgroundColor: "#adf7b6" }}>
        <Image className={styles.bla} src={Nananan} width={500} height={200} />
      </div>
      <div className={styles.hero_body}>
        <RowComponent videos={videos} />
      </div>
    </div>
  );
}

export default HomeComponent;

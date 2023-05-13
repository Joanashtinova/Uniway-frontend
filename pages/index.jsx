import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import SearchComponent from "@/Components/search";

export default function Home() {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const data = await getDocs(collection(db, "videos"));
    setVideos(data.docs.map((doc) => doc.data()));
    console.log(data.docs);
    console.log(videos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Uniway</title>
        <meta name="description" content="Find your passion!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Uniway is coming!!!!</h1>
        <h5>Buff</h5>
        <SearchComponent />
        {videos.map((video) => {
          return (
            <div>
              <h3>{video.title}</h3>
              <img src={video.tumbnail_url} />
            </div>
          );
        })}
      </main>
    </>
  );
}

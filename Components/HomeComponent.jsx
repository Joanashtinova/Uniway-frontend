import React from "react";
import styles from "./Global.module.css";
import Video from "./Video.jsx";
import Image from "next/image";
import hero from "../public/images/Untitled_Artwork.PNG";
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
            <div className={styles.hero_image}>
                <div className={styles.hero_text}>
                    <h1>Uniway</h1>
                    <p>Something is coming...</p>
                </div>
            </div>
            <div className={styles.hero_body}>
                <RowComponent videos={videos} />
            </div>
        </div>
    );
}

export default HomeComponent;

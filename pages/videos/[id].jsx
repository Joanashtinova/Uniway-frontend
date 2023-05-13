import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { collection, getDocs, query, limit, where } from "firebase/firestore";
import { db, storage } from "@/Global/firebase";

export default function Video() {
    const router = useRouter();

    const [video, setVideo] = useState({});

    const fetchData = async (title) => {
        const q = query(
            collection(db, "videos"),
            where("title", "==", title.toLowerCase()),
            limit(1)
        );
        const data = await getDocs(q);
        const videoData = data.docs.map((doc) => doc.data())[0]; // get the first video
        setVideo(videoData);
        console.log(videoData);
    };

    useLayoutEffect(() => {
        //router.query.id is the name from the url

        if (router.query.id && router) {
            fetchData(router.query.id);
        }
    }, [router.query.id]);
    return (
        <div>
            <img src={video.tumbnail_url} />
            <h1> {router.query.id}</h1>
        </div>
    );
}

import React, { useLayoutEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/Global/firebase";
import SearchComponent from "@/Components/search";
import Video from "@/Components/Video";

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
        const data = await getDocs(query(collection(db, "videos"), limit(4)));
        setVideos(data.docs.map((doc) => doc.data()));
        setFilteredVideos(data.docs.map((doc) => doc.data()));
    };

    useLayoutEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <SearchComponent
                videos={videos}
                handleNewSearch={handleNewSearch}
            />
            {filteredVideos.map((video) => {
                return (
                    <div>
                        <Video title={video.title} image={video.tumbnail_url} />
                    </div>
                );
            })}
        </div>
    );
}

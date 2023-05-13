import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/Global/firebase";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handelSearch = async () => {
    const q = query(collection(db, "videos"), where("title", "==", searchTerm));
    const querySnapshot = await getDocs(q);
    setVideos(querySnapshot.docs.map((doc) => doc.data()));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handelSearch}>Search</button>
      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <img src={video.tumbnail_url} />
          </div>
        ))}
      </div>
    </div>
  );
}

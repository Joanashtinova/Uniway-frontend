import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/Global/firebase";
import { ButtonGroup, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchComponent(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);

    const handelSearch = async () => {
        const q = query(
            collection(db, "videos"),
            where("title", "==", searchTerm)
        );
        const querySnapshot = await getDocs(q);
        setVideos(querySnapshot.docs.map((doc) => doc.data()));
    };

    return (
        <div style={{ margin: "20px", marginBottom: "50px" }}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton onClick={() => props.handleNewSearch(searchTerm)}>
                    <SearchIcon />
                </IconButton>
            </ButtonGroup>
        </div>
    );
}

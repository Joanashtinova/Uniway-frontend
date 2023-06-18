import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/Global/firebase";
import { ButtonGroup, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.handleNewSearch(searchTerm);
    }
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
          onKeyDown={handleKeyDown}
        />
        <IconButton onClick={() => props.handleNewSearch(searchTerm)}>
          <SearchIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

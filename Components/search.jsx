import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/Global/firebase";
import { ButtonGroup, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import styles from "./Global.module.css";

export default function SearchComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchTerm);
    }
  };
  const handleSearch = (searchTerm) => {
    console.log("user search ", searchTerm);
    const searchQuery = searchTerm ? searchTerm.trim() : "";

    router.push({
      pathname: "/videos",
      query: { search: searchQuery },
    });
  };

  return (
    <div className={styles.searchballon}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <TextField
          id="outlined-basic"
          label="Търсене..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            style: {
              borderRadius: "20px",
              marginTop: "1px",
              marginBottom: "5px",
              // Adjust the value as needed
            },
          }}
        />
        <IconButton onClick={() => handleSearch(searchTerm)}>
          <SearchIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

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
import Strasttezt from "../public/images/burrrrrr.png";
import Image from "next/image";
import Izgledaj from "../public/images/izgledaj.png";
import genZgirl from "../public/images/lll.png";
import TextJ from "../public/images/text.png";
import MomicheClouds from "../public/images/momiche.png";
import { Grid } from "@mui/material";
import Fostata from "../public/images/fostata.png";
import Nameri from "../public/images/nameri.png";

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
        <div
            style={{
                overflowX: "hidden",
                overflowY: "hidden",
            }}
        >
            <Grid
                container
                spacing={2}
                b
                style={{
                    //   backgroundColor: "#adf7b6",
                    // height: "800px",
                    width: "86%",
                    margin: "0 auto",

                    height: "100vh",
                }}
            >
                <Grid item xs={12} md={6}>
                    <Image
                        className={styles.bla}
                        src={Strasttezt}
                        width={500}
                        height={200}
                        layout="responsive"
                    />
                    <h4
                        className={styles.teeext}
                        style={{ marginTop: "-20px" }}
                    >
                        Uniway!Без повече стресиращо и хаотично търсене на
                        призванието ви. Тук то само ще ви открие!
                    </h4>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        className={styles.Momiche}
                        src={MomicheClouds}
                        width={600}
                        height={600}
                        layout="responsive"
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                style={{
                    backgroundColor: "#087e8b",
                    // height: "800px",
                    width: "100%",
                    margin: "0 auto",
                    marginTop: "20px",
                }}
            >
                <Grid item xs={12} md={6}>
                    <div className={styles.DivIzgelaj}>
                        <Image
                            className={styles.izgledaj}
                            src={Izgledaj}
                            layout="responsive"
                        />
                    </div>
                    <h3 className={styles.texxt}>
                        Най-доброто за един млад човек е ... Вдъхновението!{" "}
                        <br /> Всяко наше видео ви дава точно това.{" "}
                    </h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={styles.DivGenZgirl}>
                        <Image
                            className={styles.genZgirl}
                            src={genZgirl}
                            layout="responsive"
                        />
                    </div>
                </Grid>

                <Grid
                    item
                    xs={12}
                    style={{
                        marginTop: -450,
                    }}
                >
                    <RowComponent videos={videos} className={styles.vvvideos} />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                style={{
                    background: "#ff97a0",
                    marginTop: "0px",
                    height: "120vh",
                }}
            >
                <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 0 } }}>
                    <div style={{ width: 400, height: 400 }}>
                        <Image
                            src={Fostata}
                            width={300}
                            height={300}
                            layout="responsive"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} id="secondGrid">
                    <Image src={Nameri} layout="responsive" />
                    <h3 className={styles.dobriq}>
                        Добрият университет може да бъде ключа към успешното
                        бъдеще...
                        <br />
                        Подсигури го с Uniway
                    </h3>
                </Grid>
            </Grid>
        </div>
    );
}
export default HomeComponent;

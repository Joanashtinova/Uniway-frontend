import React from "react";
import styles from "./Global.module.css";
import Video from "./Video.jsx";
import Link from "next/link";

function RowComponent(props) {
    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <Link href={"/videos"}>See More</Link>
            </div>

            <div className={styles.videoContainer}> 
                {props.videos.map((video) => {
                    return (
                        <div>
                            <Video
                                title={video.title}
                                image={video.tumbnail_url}
                                id={video.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RowComponent;

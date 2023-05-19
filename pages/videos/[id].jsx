import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { collection, getDocs, query, limit, where } from "firebase/firestore";
import { db, storage } from "@/Global/firebase";
import { Style } from "@mui/icons-material";
import VideoPage from "@/Components/VideoPage";

export default function Video() {
  const router = useRouter();

  return <div>{router.query.id && <VideoPage id={router.query.id} />}</div>;
}

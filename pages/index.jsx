import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "@/Components/HomeComponent";
import VideoComponents from "@/Components/Video";



export default function Home() {
  const videoUrl = 'https://example.com/video.mp4'; 

  return (
    <>
      <Head>
        <title>Uniway</title>
        <meta name="description" content="Find your passion!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Uniway is coming!!!!</h1>
        <HomeComponent/> 
      </main>
    </>
  );
}


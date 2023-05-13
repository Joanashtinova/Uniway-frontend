import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeComponent from "@/Components/HomeComponent";

export default function Home() {
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
        <h5>Buff</h5>
      </main>

      <HomeComponent/>

    </>
  );
}

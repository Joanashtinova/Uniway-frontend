import Head from "next/head";
import HomeComponent from "@/Components/HomeComponent";

export default function Home() {
    return (
        <>
            <Head>
                <title>Uniway</title>
                <meta name="description" content="Find your passion!" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HomeComponent />
            </main>
        </>
    );
}

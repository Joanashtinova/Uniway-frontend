import styles from "../styles/globals.css";
import Navbar from "@/Components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

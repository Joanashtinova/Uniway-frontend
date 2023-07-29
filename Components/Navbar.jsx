import * as React from "react";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import SearchComponent from "./search";
import styles from "./Global.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" className={styles.lllogo} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href={"/videos"} className={styles.videobutton}>
            Видеа
          </Link>{" "}
          <SearchComponent /> {/* Add the SearchComponent here */}
        </nav>
      </div>
    </div>
  );
}
export default Navbar;

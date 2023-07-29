import * as React from "react";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import SearchComponent from "./search";
import styles from "./Global.module.css";

function Navbar() {
<<<<<<< Updated upstream
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className={styles.lllogo}
                        />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href={"/videos"} className={styles.videobutton}>
                        Видеа
                    </Link>{" "}
                    <SearchComponent /> {/* Add the SearchComponent here */}
                </nav>
            </div>
=======
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const localstyles = {
    navbar: {
      justifyContent: "space-between",
      position: "sticky",
      width: "90%",
      backgroundColor: "#fff",
      zIndex: 100,
      padding: "10px 0",
      margin: "0 auto",
      borderRadius: "60px",
      display: "flex",
    },
    logo: {
      margin: 0,
      padding: "20px",
      float: "left",
      marginTop: "50px",
    },

    nav: {
      // border: "3px solid red",

      float: "right",
      marginRight: "40px",
      display: "flex",
      top: "0",
      alignSelf: "right",
      marginTop: "8px",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      display: "inline-block",
      marginLeft: "20px",
    },
    a: {
      color: "black",
      textDecoration: "none",
    },
  };

  return (
    <div className={styles.container}>
      <div style={localstyles.navbar}>
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" className={styles.lllogo} />
          </Link>
>>>>>>> Stashed changes
        </div>
    );
}
export default Navbar;

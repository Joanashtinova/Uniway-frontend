import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import SearchComponent from "./search";
import styles from "./Global.module.css";

const pages = [
    { name: "Видеа", page: "videos" },
    { name: "Калкулатор", page: "calculator" },
];

function Navbar() {
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
    const localstyles = {};

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
        </div>
    );
}
export default Navbar;

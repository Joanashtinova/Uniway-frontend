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
  const styles = {
    container: {
      position: "relative",
      paddingTop: "30px",
    },

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
      padding: "0 20px",
      float: "left",
    },

    nav: {
      // border: "3px solid red",

      float: "right",
      marginRight: "40px",
      display: "flex",
      top: "0",
      alignSelf: "right",
      marginTop: "20px",
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
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={{ marginLeft: "40px" }}>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={100} height={70} />
          </Link>
        </div>
        <nav style={styles.nav}>
          <Link
            href={"/videos"}
            style={{
              color: "#0b3954",
              textDecoration: "none",
              fontFamily: "",
              fontSize: "17px",
              marginRight: "30px",
            }}
          >
            Видеа
          </Link>{" "}
          <Link
            href={"/calcolator"}
            style={{
              color: "#0b3954",

              textDecoration: "none",
              fontFamily: "",
              fontSize: "17px",
              marginRight: "30px",
            }}
          >
            Калкулатор
          </Link>{" "}
        </nav>
      </div>
      {/* // <AppBar
        //     position="fixed"
        //     sx={{
        //         backgroundColor: "white",
        //         borderRadius: "60px",
        //         overflow: "hidden",
        //         marginTop: "50px",
        //     }}
        // >
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>
        //             <Link href="/">
        //                 <Image src={Logo} alt="Logo" width={100} height={70} />
        //             </Link>
        //             <Box
        //                 sx={{
        //                     flexGrow: 1,
        //                     display: { xs: "none", md: "flex" },
        //                 }}
        //             >
        //                 {pages.map((page) => (
        //                     <Button
        //                         key={page}
        //                         onClick={handleCloseNavMenu}
        //                         sx={{ my: 2, color: "white", display: "block" }}
        //                     >
        //                         <Link
        //                             href={"/" + page.page}
        //                             style={{
        //                                 color: "#0b3954",

        //                                 textDecoration: "none",
        //                                 fontFamily: "",
        //                                 fontSize: "17px",
        //                             }}
        //                         >
        //                             <p textAlign="center">{page.name}</p>
        //                         </Link>
        //                     </Button>
        //                 ))}
        //             </Box>
        //         </Toolbar>
        //     </Container>
        // </AppBar> */}
    </div>
  );
}
export default Navbar;

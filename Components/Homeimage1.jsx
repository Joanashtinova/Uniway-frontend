import React from "react";
import Logo from "../public/images/logo.png";
import Image from "next/image";

function Homeimage1() {
  return (
    <div>
      <Image src={Logo} alt="Logo" width={100} height={70} />
    </div>
  );
}

export default Homeimage1;

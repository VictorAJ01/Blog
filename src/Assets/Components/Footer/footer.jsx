import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Images/Logo.png";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      marginTop="7%"
      display="flex"
      flexDirection="column"
      backgroundColor="#111"
      paddingY="3%"
      color="#fff"
    >
      <img src={Logo} alt="Logo" />
    </Box>
  );
}

export default Footer;

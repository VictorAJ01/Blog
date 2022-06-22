import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "../../Images/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Box
      bgColor="green"
      display="flex"
      gap={{ base: "14%", md: "43%", lg: "77%" }}
      alignItems="center"
      fontSize={{ base: "1rem", md: "1.7rem" }}
      // justifyContent="center"
      padding={{ base: "1%", md: "2.5%", lg: "2%" }}
    >
      <Box>
        <img src={Logo} className="Logo" alt="logo" />
      </Box>
      <Flex gap={{ base: "10%", md: "10%", lg: "40%" }}>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/news">
          News
        </NavLink>
      </Flex>
    </Box>
  );
}

export default Header;

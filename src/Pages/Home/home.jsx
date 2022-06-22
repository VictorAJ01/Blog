import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../../Assets/Components/Footer/footer";
import Header from "../../Assets/Components/Header/header";
import newsData from "../News/data";

function Home() {
  let params = useParams();
  console.log({ params });
  return (
    <Box>
      <Header />
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        {newsData.map((newsData) => {
          return (
            <NavLink className="link" to={`/news/${newsData.title}`}>
              <Box
                color="#111111"
                width={{ base: "auto", md: "auto", lg: "100%" }}
                paddingX={{ base: "3%", md: "5%" }}
                marginTop="5%"
              >
                <img
                  key={newsData.image}
                  src={newsData.image}
                  alt="Image1"
                  className="Image1"
                />
                <Text
                  fontSize={{ base: ".8rem", md: "1.3rem", lg: "1rem" }}
                  paddingTop={{ md: "1%" }}
                  className="bold"
                  key={newsData.text}
                >
                  {newsData.date}
                </Text>
                <Heading
                  fontSize={{ base: "1.3rem", md: "2.5rem", lg: "2rem" }}
                  key={newsData.title}
                >
                  {newsData.title}
                </Heading>
              </Box>
            </NavLink>
          );
        })}
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;

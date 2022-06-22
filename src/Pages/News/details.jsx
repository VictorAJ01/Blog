import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import newsData from "./data";
import Header from "../../Assets/Components/Header/header";
import Footer from "../../Assets/Components/Footer/footer";

const News = () => {
  return (
    <Box>
      <Header />
      <Box>
        {newsData.map((newsData) => {
          return (
            <Box paddingX={{ base: "3%", md: "5%" }} marginTop="5%">
              <Heading fontSize={{ base: "1.3rem", md: "2.5rem", lg: "3rem" }}>
                {newsData.title}
              </Heading>
              <Box
                marginTop={{ base: ".8%", md: ".5%", lg: ".8rem" }}
                fontSize={{ base: ".8rem", md: "1.3rem" }}
                className="bold"
              >
                <Text>{newsData.date}</Text>
                <Text>{newsData.publisher}</Text>
              </Box>
              <img src={newsData.image} alt="image1" className="Image1" />
              <Text
                fontSize={{ base: "1rem", md: "1.9rem" }}
                textAlign="left"
                marginTop="2%"
              >
                {newsData.content}
              </Text>
            </Box>
          );
        })}
      </Box>
      <Footer />
    </Box>
  );
};

export default News;

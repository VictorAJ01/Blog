import { Heading, Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Assets/Components/Footer/footer";
import Header from "../../Assets/Components/Header/header";
import newsData from "./data";

function Insecurity() {
  const [currentBlog, setCurrentBlog] = useState();

  let params = useParams();

  useEffect(() => {
    console.log(params.title);
    let blogs = newsData.find((data, index) => {
      return data.title === params.title;
    });
    console.log({ blogs });
    setCurrentBlog(blogs);
  }, []);

  return (
    <Box textAlign="left">
      <Header />
      <Box paddingX={{ base: "3%", md: "5%" }} marginTop="5%">
        <Heading fontSize={{ base: "1.3rem", md: "2.5rem", lg: "3rem" }}>
          {currentBlog?.title}
        </Heading>
        <Box
          fontSize={{ base: ".8rem", md: "1.3rem" }}
          marginTop={{ base: "2%", md: "2%", lg: ".8rem" }}
          className="bold"
        >
          <Text>{currentBlog?.date}</Text>
          <Text>{currentBlog?.publisher}</Text>
        </Box>
        <img src={currentBlog?.image} alt="Image1" className="Image1" />
        <Text
          fontSize={{ base: "1rem", md: "1.9rem" }}
          textAlign="left"
          marginTop="2%"
          key={currentBlog?.content}
        >
          {currentBlog?.content}
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}

export default Insecurity;

import "./App.css";
import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./Pages/News/news";
import Home from "./Pages/Home/home";
import News from "./Pages/News/details";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/news" element={<News />}></Route>
          <Route exact path="/news/:title" element={<NewsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

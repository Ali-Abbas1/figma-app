import "./App.css";
import Navbar from "./components/navbar/index.js";
import Banner from "./components/banner/index.js";
import Dreamstudio from "./components/explore-dream-studio/index.js";
import Banner2 from './components/banner2/index.js';
import Ourteam from './components/ourteam/index.js';
import Blog from './components/blog/index.js';
import Footer from './components/footer/index.js';
import Searchbar from "./components/searchbar";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Searchbar />
      <Dreamstudio />
      <Banner2 />
      <Ourteam />
      <Blog />
      <Footer />
    </>
  );
}

export default App;

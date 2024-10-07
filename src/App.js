import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkWithGustav from "./components/WorkWithGustav/WorkWithGustav";
import Contact from "./components/Contact/Contact";
import Podcast from "./components/Pocasts/Podcast";
import Store from "./components/Store/Store";
import Cap from "./components/Store/Cap";
import WorkWithGustavPageTwo from "./components/WorkWithGustavPageTwo/WorkWithGustavPageTwo";
import Community from "./components/Community/Community";
import ScrollToTop from "./ScrollToTop";
import Mug from "./components/Store/Mug";
import Shirt from "./components/Store/Shirt";


function App() {
  return (
    <>

<Router>
  <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/work-with-gustav" exact element={<WorkWithGustav />} />
        <Route path="/learn-more" exact element={<WorkWithGustavPageTwo />} />
        <Route path="/podcast" exact element={<Podcast />} />
        <Route path="/store" exact element={<Store />} />
        <Route path="/store/1" exact element={<Cap />} />
        <Route path="/store/2" exact element={<Mug />} />
        <Route path="/store/3" exact element={<Shirt />} />
        <Route path="/contact-us" exact element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;


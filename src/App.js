import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Programs from "./components/Programs/Programs";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>

<Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/programs" exact element={<Programs />} />
        <Route path="/youreenough" exact element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;


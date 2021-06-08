import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;

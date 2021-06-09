import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import UsersApi from "./components/UsersApi/UsersApi";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Blogs />
      <Users />
      <UsersApi />
      <Footer />
    </>
  );
}

export default App;

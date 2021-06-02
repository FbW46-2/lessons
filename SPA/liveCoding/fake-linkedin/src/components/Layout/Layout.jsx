import "./Layout.css";
import React from "react";

function Layout(props) {
  return (
    <>
      <nav className="Navbar">Fake Linkedin</nav>
      {props.children}
      <footer className="Footer">&copy; fakelinkedin.com</footer>
    </>
  );
}

export default Layout;

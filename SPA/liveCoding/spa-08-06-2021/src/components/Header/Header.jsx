import "./Header.scss";
import React from "react";
import headerBg from "../../images/header-bg.svg";

export default function Header() {
  return (
    <header
      className="Header"
      style={{
        backgroundImage: `url(${headerBg})`,
        height: "40vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <nav className="Navbar">
        <div className="Logo">Logo</div>
        <ul className="NavbarItems">
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </nav>
    </header>
  );
}

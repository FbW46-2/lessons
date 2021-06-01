import "./Navbar.css";

function Navbar({ data }) {
  return (
    <nav className="Navbar">
      <div className="Logo">{data.logo}</div>
      <ul className="NavbarItems">
        {data.navbarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

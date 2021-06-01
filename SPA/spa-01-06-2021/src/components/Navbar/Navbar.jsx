function Navbar({ data }) {
  return (
    <nav className="Navbar">
      <div className="Logo">{data.navbarData.logo}</div>
      <ul className="NavbarItems">
        {data.navbarData.navbarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

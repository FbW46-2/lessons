import "./App.css";

const navbarData = {
  logo: "Logo",
  navbarItems: ["Home", "About", "Contact", "Posts"],
};

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Logo">{navbarData.logo}</div>
      <ul className="NavbarItems">
        {navbarData.navbarItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  const mainPageData = {
    title: "Home Page",
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ducimus
    sit dolorum laboriosam dolore error neque eius expedita culpa dolores.`,
  };
  return (
    <>
      <Navbar />
      <main>
        <h1>{mainPageData.title}</h1>
        <p>{mainPageData.body}</p>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;

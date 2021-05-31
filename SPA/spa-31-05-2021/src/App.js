import "./App.css";

/*
function foo() {
  return 1 + 1;
}*/

function App() {
  let mainPage = "Main!";
  let cr = "copyright";
  const names = ["Max", "Alex", "Tommy"];
  return (
    <div>
      <nav>Navbar </nav>
      <main>{mainPage} </main>
      <ul>
        {names.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <footer>{cr} Footer</footer>
    </div>
  );
}

export default App;

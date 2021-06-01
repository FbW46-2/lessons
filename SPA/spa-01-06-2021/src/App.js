import "./App.css";
import api from "./api";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar data={api} />
      <main>
        <h1>{api.mainPageData.title}</h1>
        <p>{api.mainPageData.body}</p>
      </main>
      <Footer />
    </>
  );
}

export default App;

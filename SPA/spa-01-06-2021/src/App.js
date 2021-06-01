import "./App.css";
import api from "./api";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Navbar data={api.navbarData} />
      <Main data={api.mainPageData} />
      <Footer />
    </>
  );
}

export default App;

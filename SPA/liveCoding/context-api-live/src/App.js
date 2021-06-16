import "./App.css";
import { BookList } from "./BookList";
import { Nav } from "./Nav";
import { BookProvider } from "./BookContext";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;

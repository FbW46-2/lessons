import "./App.css";
import { useState } from "react";
import ToDosCard from "./components/ToDosCard";
import ToDosForm from "./components/ToDosForm";

function App() {
  const [toDos, setToDos] = useState(["Shopping", "Go to the gym"]);
  return (
    <div className="Container">
      <h1>To Dos App</h1>
      <ToDosForm toDos={toDos} setToDos={setToDos} />
      {toDos.map((item, id) => (
        <ToDosCard key={id} toDo={item} />
      ))}
    </div>
  );
}

export default App;

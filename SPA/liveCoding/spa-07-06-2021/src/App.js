import "./App.css";
import { useState } from "react";
import ToDosCard from "./components/ToDosCard";
import ToDosForm from "./components/ToDosForm";

function App() {
  const [toDos, setToDos] = useState(["Shopping", "Go to the gym"]);

  const onDeleteByIndex = (index) => {
    console.log(index);
    const cloneAndUpdate = toDos.filter(
      (item, indexOfItem) => indexOfItem !== index
    );

    console.log(cloneAndUpdate);
    setToDos(cloneAndUpdate);
  };
  return (
    <div className="Container">
      <h1>To Dos App</h1>
      <ToDosForm toDos={toDos} setToDos={setToDos} />
      {toDos.map((item, id) => (
        <ToDosCard
          key={id}
          toDo={item}
          itemIndex={id}
          onDeleteHandler={onDeleteByIndex}
        />
      ))}
    </div>
  );
}

export default App;

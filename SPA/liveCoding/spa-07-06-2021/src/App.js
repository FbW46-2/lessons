import "./App.css";
import { useState } from "react";
import ToDosCard from "./components/ToDosCard";

function ToDosForm({ stateDate, updateState }) {
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = e.target.todo.value;
    //stateDate = ["Shopping", "Go to the gym"]
    //...stateDate ==>  "Shopping", "Go to the gym"
    const cloneAndUpdateToDos = [newTodo, ...stateDate];

    console.log("cloneAndUpdateToDos => ", cloneAndUpdateToDos);
    updateState(cloneAndUpdateToDos);
    e.target.reset();
  };

  return (
    <form className="ToDosForm" onSubmit={submitHandler}>
      <input type="text" name="todo" />
      <button>ADD</button>
    </form>
  );
}

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

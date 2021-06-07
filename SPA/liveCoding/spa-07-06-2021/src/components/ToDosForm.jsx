function ToDosForm({ toDos, setToDos }) {
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = e.target.todo.value;
    //toDos = ["Shopping", "Go to the gym"]
    //...toDos ==>  "Shopping", "Go to the gym"
    const cloneAndUpdateToDos = [newTodo, ...toDos];

    console.log("cloneAndUpdateToDos => ", cloneAndUpdateToDos);
    setToDos(cloneAndUpdateToDos);
    e.target.reset();
  };

  return (
    <form className="ToDosForm" onSubmit={submitHandler}>
      <input type="text" name="todo" />
      <button>ADD</button>
    </form>
  );
}

export default ToDosForm;

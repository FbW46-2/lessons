function ToDosCard({ toDo }) {
  return (
    <div className="Card">
      <div className="Item">{toDo}</div>
      <span className="Delete">X</span>
    </div>
  );
}

export default ToDosCard;

function ToDosCard({ toDo, onDeleteHandler, itemIndex }) {
  return (
    <div className="Card">
      <div className="Item">{toDo}</div>
      <span onClick={() => onDeleteHandler(itemIndex)} className="Delete">
        X
      </span>
    </div>
  );
}

export default ToDosCard;

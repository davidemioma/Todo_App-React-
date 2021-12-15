import "./TodoInfo.css";

function TodoInfo(props) {
  return (
    <div className="todo_box info">
      <span>
        <p className="items_left">{props.itemsLeft}</p>
        <p>items available</p>
      </span>
      <button value="clear" className="clear_completed">
        Clear Completed
      </button>
    </div>
  );
}

export default TodoInfo;

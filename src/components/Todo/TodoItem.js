import "./TodoItem.css";

function TodoItem(props) {
  const removeTodoHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo">
      <span className="tick">
        <img src="" alt=""></img>
      </span>
      <p className="todo_item">{props.value}</p>
      <button onClick={removeTodoHandler} className="remove_item">
        <img src="" alt=""></img>
      </button>
    </li>
  );
}

export default TodoItem;

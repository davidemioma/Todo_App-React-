import "./TodoItem.css";

function TodoItem(props) {
  const removeTodoHandler = () => {
    props.onDelete(props.id);
  };

  const setTodoToActive = (e) => {
    const item = e.target;

    const parent = item.parentElement;

    if (item.classList.contains("tick")) {
      parent.classList.add("todo_done");
      props.onClick(props);
    }
  };

  return (
    <li className="todo">
      <span onClick={setTodoToActive} className="tick">
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

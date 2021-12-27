import "./TodoItem.css";
import { useState } from "react";

function TodoItem(props) {
  const [isCompleted, setisCompleted] = useState(false);

  const removeTodoHandler = () => {
    props.onDelete(props.id);
  };

  const setTodoToActive = (e) => {
    props.onClick(props);
    setisCompleted(true);
  };

  const spanClass = `${isCompleted ? "todo_done" : "tick"}`;

  return (
    <li className="todo">
      <span onClick={setTodoToActive} className={spanClass}>
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

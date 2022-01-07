import "./TodoItem.css";
import { useState } from "react";

function TodoItem(props) {
  const removeTodoHandler = () => {
    props.onDelete(props.id);
  };

  const setTodoToActive = (e) => {
    props.onClick(props);
  };

  const liClass = `todo ${props.isCompleted ? "todo_done" : ""}`;

  return (
    <li className={liClass}>
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

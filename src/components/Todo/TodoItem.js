import "./TodoItem.css";
import { useState } from "react";

function TodoItem(props) {
  return (
    <li className="todo">
      <span className="tick">
        <img src="" alt=""></img>
      </span>
      <p className="todo_item">{props.value}</p>
      <button className="remove_item">
        <img src="" alt=""></img>
      </button>
    </li>
  );
}

export default TodoItem;

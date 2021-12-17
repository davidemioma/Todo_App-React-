import "./TodoItem.css";
import { useState } from "react";

function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const removeItem = () => {
    props.onDelete(props.id);
  };

  const tickItem = (e) => {
    const item = e.target;

    const parent = item.parentElement;

    if (item.classList.contains("tick")) {
      parent.classList.toggle("todo_done");
      setIsCompleted(true);
    }

    console.log(isCompleted);
  };

  return (
    <li className="todo">
      <span onClick={tickItem} className="tick">
        <img src="" alt=""></img>
      </span>
      <p className="todo_item">{props.value}</p>
      <button onClick={removeItem} className="remove_item">
        <img src="" alt=""></img>
      </button>
    </li>
  );
}

export default TodoItem;

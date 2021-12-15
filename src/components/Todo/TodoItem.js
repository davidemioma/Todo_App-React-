import "./TodoItem.css";

function TodoItem(props) {
  const removeItem = (e) => {
    const item = e.target;

    const parent = item.parentElement;

    if (item.classList.contains("remove_item")) {
      parent.classList.add("fall");

      parent.addEventListener("transitionend", function () {
        parent.remove();
      });
    }
  };

  const tickItem = (e) => {
    const item = e.target;

    const parent = item.parentElement;

    if (item.classList.contains("tick")) {
      parent.classList.toggle("todo_done");
    }
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

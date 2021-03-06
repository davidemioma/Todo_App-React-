import "./TodoInfo.css";
import TodoContext from "../../store/todo-context";
import { useContext } from "react";

function TodoInfo() {
  const todoCtx = useContext(TodoContext);

  const handleClearCompleted = () => {
    todoCtx.clearCompleted();
  };

  return (
    <div className="todo_box info">
      <span>
        <p className="items_left">{todoCtx.items.length}</p>
        <p>items available</p>
      </span>
      <button
        onClick={handleClearCompleted}
        value="clear"
        className="clear_completed"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoInfo;

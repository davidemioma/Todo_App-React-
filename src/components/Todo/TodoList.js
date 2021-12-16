import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="todo_list-container">
      <ul className="todo_list">
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            value={item.value}
            onDelete={props.onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

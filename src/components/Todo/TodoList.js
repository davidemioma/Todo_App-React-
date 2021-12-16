import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="todo_list-container">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          value={item.value}
          onDelete={props.onDeleteItem}
        />
      ))}
    </div>
  );
}

export default TodoList;

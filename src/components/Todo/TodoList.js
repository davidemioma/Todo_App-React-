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
          isCompleted={item.isCompleted}
          onDelete={props.onRemoveTodoItem}
        />
      ))}
    </div>
  );
}

export default TodoList;

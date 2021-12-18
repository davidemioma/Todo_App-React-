import "./Todo.css";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

function Todo(props) {
  const [filterValue, setFilterValue] = useState("all");

  const savedDataHandler = (todo) => {
    props.onNewTodo(todo);
  };

  const getDataId = (todoID) => {
    props.onDeleteTodo(todoID);
  };

  const tickTodo = (todo) => {
    props.onTickTodo(todo);
  };

  const getFilteredValue = (value) => {
    setFilterValue(value);
  };

  const filteredTodo = props.items.filter((todo) => {
    if (filterValue === "completed" && todo.isCompleted === true) {
      return todo;
    }

    if (filterValue === "active" && todo.isCompleted === false) {
      return todo;
    }

    if (filterValue === "all") {
      return todo;
    }
  });

  return (
    <div className="todo_container container">
      <NewTodo onSavedData={savedDataHandler} />
      <TodoList
        items={filteredTodo}
        onDeleteItem={getDataId}
        onTickItem={tickTodo}
      />
      <TodoInfo itemsLeft={props.itemsLeft} />
      <TodoFilter onFilterSelected={getFilteredValue} />
    </div>
  );
}

export default Todo;

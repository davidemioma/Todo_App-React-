import "./Todo.css";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

function Todo(props) {
  const [filterValue, setFilterValue] = useState("all");

  const savedDataHandler = (todo) => {
    const enteredData = {
      ...todo,
      isActive: false,
      id: Math.random().toString(),
    };
    props.onNewTodo(enteredData);
  };

  const getFilteredValue = (value) => {
    setFilterValue(value);
    console.log(value);
  };

  return (
    <div className="todo_container container">
      <NewTodo onSavedData={savedDataHandler} />
      <TodoList items={props.items} />
      <TodoInfo itemsLeft={props.itemsLeft} />
      <TodoFilter onFilterSelected={getFilteredValue} />
    </div>
  );
}

export default Todo;

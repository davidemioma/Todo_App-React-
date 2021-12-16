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
    console.log(todoID);
    props.onDeleteTodo(todoID);
  };

  const getFilteredValue = (value) => {
    setFilterValue(value);
    console.log(value);
  };

  return (
    <div className="todo_container container">
      <NewTodo onSavedData={savedDataHandler} />
      <TodoList items={props.items} onDeleteItem={getDataId} />
      <TodoInfo itemsLeft={props.itemsLeft} />
      <TodoFilter onFilterSelected={getFilteredValue} />
    </div>
  );
}

export default Todo;

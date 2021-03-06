import "./Todo.css";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import TodoFilter from "./TodoFilter";
import { useState, useContext } from "react";
import TodoContext from "../../store/todo-context";

function Todo(props) {
  const [filterValue, setFilterValue] = useState("all");

  const todoCtx = useContext(TodoContext);

  const savedDataHandler = (todo) => {
    const todoItem = {
      id: Math.random().toString(),
      value: todo,
      isCompleted: false,
    };

    todoCtx.addTodo(todoItem);
  };

  const removeTodo = (id) => {
    todoCtx.removeTodo(id);
  };

  const completeTodo = (todo) => {
    todoCtx.setTodoActive(todo);
  };

  const getFilteredValue = (value) => {
    setFilterValue(value);
  };

  const filteredTodo = todoCtx.items.filter((todo) => {
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
        onRemoveTodoItem={removeTodo}
        onTodoCompleted={completeTodo}
      />
      <TodoInfo />
      <TodoFilter onFilterSelected={getFilteredValue} />
    </div>
  );
}

export default Todo;

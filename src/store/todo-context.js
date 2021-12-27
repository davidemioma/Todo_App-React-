import React from "react";

const TodoContext = React.createContext({
  items: [],
  addTodo: (item) => {},
  removeTodo: (id) => {},
  setTodoActive: (item) => {},
  clearCompleted: () => {},
});

export default TodoContext;

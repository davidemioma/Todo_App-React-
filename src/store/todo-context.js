import React from "react";

const TodoContext = React.createContext({
  items: [],
  availableItems: items.length,
  addTodo: (item) => {},
  removeTodo: (id) => {},
  setTodoActive: (item) => {},
});

export default TodoContext;

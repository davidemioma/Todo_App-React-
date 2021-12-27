import TodoContext from "./todo-context";
import { useReducer } from "react";

const defaultTodoState = {
  items: [],
  availableItems: items.length,
};

const todoReducer = (state, action) => {};

function TodoProvider(props) {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoItemHandler = (item) => {};

  const removeTodoItemHandler = (id) => {};

  const setTodoActiveHandler = (item) => {};

  const todoContext = {
    items: [],
    availableItems: items.length,
    addTodo: addTodoItemHandler,
    removeTodo: removeTodoItemHandler,
    setTodoActive: setTodoActiveHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

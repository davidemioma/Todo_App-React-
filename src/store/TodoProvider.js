import TodoContext from "./todo-context";
import { useReducer } from "react";

const defaultTodoState = {
  items: [],
};

const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO_ITEM") {
    const updatedTodo = state.items.concat(action.item);
    return {
      items: updatedTodo,
    };
  }

  return defaultTodoState;
};

function TodoProvider(props) {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoItemHandler = (item) => {
    dispatchTodoAction({ type: "ADD_TODO_ITEM", item: item });
  };

  const removeTodoItemHandler = (id) => {
    dispatchTodoAction({ type: "REMOVE_TODO_ITEM", id: id });
  };

  const setTodoActiveHandler = (item) => {
    dispatchTodoAction({ type: "SET_TODO_ACTIVE", item: item });
  };

  const todoContext = {
    items: todoState.items,
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

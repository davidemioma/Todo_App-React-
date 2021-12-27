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

  if (action.type === "REMOVE_TODO_ITEM") {
    const updatedTodo = state.items.filter((item) => item.id != action.id);
    return {
      items: updatedTodo,
    };
  }

  if (action.type === "SET_TODO_ACTIVE") {
    const existingTodoItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingTodoItem = state.items[existingTodoItemIndex];

    let updatedTodo;

    if (existingTodoItem) {
      const updatedItem = {
        ...existingTodoItem,
        isCompleted: true,
      };

      updatedTodo = [...state.items];
      updatedTodo[existingTodoItemIndex] = updatedItem;
    }

    return {
      items: updatedTodo,
    };
  }

  if (action.type === "CLEAR_COMPLETED") {
    const updatedTodo = state.items.filter(
      (item) => item.isCompleted === false
    );

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

  const ClearCompletedHandler = () => {
    dispatchTodoAction({ type: "CLEAR_COMPLETED" });
  };

  const todoContext = {
    items: todoState.items,
    addTodo: addTodoItemHandler,
    removeTodo: removeTodoItemHandler,
    setTodoActive: setTodoActiveHandler,
    clearCompleted: ClearCompletedHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

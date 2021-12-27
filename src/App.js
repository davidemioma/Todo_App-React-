import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Todo
        onNewTodo={addNewTodo}
        items={todosArr}
        itemsLeft={todosArr.length}
        onDeleteTodo={deleteTodo}
        onTickTodo={tickTodo}
      />
      <Footer />
    </TodoProvider>
  );
}

export default App;

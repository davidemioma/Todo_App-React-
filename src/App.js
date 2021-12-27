import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Todo />
      <Footer />
    </TodoProvider>
  );
}

export default App;

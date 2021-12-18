import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const DUMMY_TODOS = [
  { id: "1", value: "Go to work", isCompleted: false },
  { id: "2", value: "Watch a movie", isCompleted: false },
  { id: "3", value: "Play Video Games", isCompleted: false },
];

function App() {
  const [todosArr, setTodosArr] = useState(DUMMY_TODOS);

  const addNewTodo = (todo) => {
    setTodosArr((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({
        value: todo,
        isCompleted: false,
        id: Math.random().toString(),
      });
      return updatedTodo;
    });
  };

  const deleteTodo = (todoID) => {
    setTodosArr((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== todoID);
      return updatedTodo;
    });
  };

  const tickTodo = (todo) => {
    console.log(todo);
  };

  return (
    <body>
      <Header />
      <Todo
        onNewTodo={addNewTodo}
        items={todosArr}
        itemsLeft={todosArr.length}
        onDeleteTodo={deleteTodo}
        onTickTodo={tickTodo}
      />
      <Footer />
    </body>
  );
}

export default App;

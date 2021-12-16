import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const DUMMY_TODOS = [
  { id: "1", value: "Go to work", isActive: false },
  { id: "2", value: "Watch a movie", isActive: false },
  { id: "3", value: "Play Video Games", isActive: false },
];

function App() {
  const [todosArr, setTodosArr] = useState(DUMMY_TODOS);

  const addNewTodo = (todo) => {
    setTodosArr((prevTodo) => {
      return [todo, ...prevTodo];
    });
    console.log(todo);
  };

  const deleteNewTodo = (todoID) => {
    setTodosArr((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== todoID);
      return updatedTodo;
    });
  };

  return (
    <body>
      <Header />
      <Todo
        onNewTodo={addNewTodo}
        items={todosArr}
        itemsLeft={todosArr.length}
        onDeleteItem={deleteNewTodo}
      />
      <Footer />
    </body>
  );
}

export default App;

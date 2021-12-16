import "./NewTodo.css";
import { useState } from "react";

function NewTodo(props) {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    props.onSavedData(value);

    setValue("");
  };

  return (
    <form className="todo_box create_todo" onSubmit={handleSubmitForm}>
      <span className="tick_create"></span>
      <input
        className="todo_input"
        placeholder="Create a new todo..."
        type="text"
        value={value}
        onChange={inputChangeHandler}
      />
    </form>
  );
}

export default NewTodo;

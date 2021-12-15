import "./TodoFilter.css";

function TodoFilter(props) {
  const selectFilter = (e) => {
    props.onFilterSelected(e.target.value);
  };

  return (
    <div className="todo_box sorting_todo">
      <div onClick={selectFilter}>
        <button value="all" className="all">
          All
        </button>
        <button value="active" className="active">
          Active
        </button>
        <button value="completed" className="todo_completed">
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;

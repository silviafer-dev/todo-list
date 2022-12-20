import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ id, task, completed, removeTodo, updateTodo, toggleTodo }) => {
  const [edit, setEdit] = useState({
    task: task,
    isEditing: false,
  });

  const handleRemove = () => {
    removeTodo(id);
  };
  const toggleForm = () => {
    setEdit({ isEditing: !edit.isEditing });
  };

  const handleChange = (evt) => {
    setEdit({ ...edit, [evt.target.name]: evt.target.value });
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateTodo(id, edit.task);
    setEdit({ isEditing: false });
  };
  const handleToggle = () => {
    toggleTodo(id);
  };

  let result;

  if (edit.isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input
            type="text"
            value={edit.task}
            name="task"
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo-buttons">
        <div className="Todo-buttons-left">
          <button onClick={toggleForm}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i className="fas fa-trash" />
          </button>
        </div>
        <li
          className={completed ? " Todo-task completed" : "Todo-task"}
          onClick={handleToggle}
        >
          {task}
        </li>
      </div>
    );
  }
  return result;
};

export default Todo;

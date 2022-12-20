import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState({ task: "" });

  const handleChange = (evt) => {
    setTask({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTodo({ ...task, id: uuidv4(), completed: false });
    setTask({ task: "" });
  };
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        value={task.task}
        name="task"
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;

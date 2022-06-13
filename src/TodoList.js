import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    let newList = todos.filter((todo) => todo.id !== id);
    setTodos([...newList]);
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        task={todo.task}
        id={todo.id}
        removeTodo={remove}
        updateTodo={update}
        completed={todo.completed}
        toggleTodo={toggleCompletion}
      />
    );
  });
  return (
    <div className="TodoList">
      <h1>
        Todo List! <span>A Simple React Todo List App.</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
};

export default TodoList;

import React from "react";
import "./style.css";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    return (
      <div className="todoItem">
        <li>{todo.name}</li>
        <button onClick={() => updateTodo(todo.id)}>
          Update
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    );
}
export default TodoItem;

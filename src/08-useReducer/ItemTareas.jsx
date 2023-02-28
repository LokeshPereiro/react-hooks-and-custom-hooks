import React from "react";

export const ItemTareas = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span
          onClick={() => onToggleTodo(todo.id)}
          className={`${todo.done ? "text-decoration-line-through" : ""}`}
        >
          {todo.desc}
        </span>{" "}
        <button
          onClick={() => onRemoveTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};

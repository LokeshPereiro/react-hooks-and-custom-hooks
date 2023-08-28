import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   desc: "Tarea 1",
  //   done: false,
  // },
  //  Vamos guardar los datos en el localStorage
];

const init = () => {
  return JSON.parse(localStorage.getItem("todoAppItems")) || [];
};

export const useTodos = () => {
  //   const [state, dispatch] = useReducer(reducerX, initialState);
  const [todoState, dispatchTodos] = useReducer(
    todoReducer,
    initialState,
    init
  );
  //   console.log(todoState);

  useEffect(() => {
    localStorage.setItem("todoAppItems", JSON.stringify(todoState) || []);
  }, [todoState]);

  const handleNewTodo = (onNewTarea) => {
    // console.log({ onNewTarea });
    const action = {
      type: "[Todo] Add Todo",
      payload: onNewTarea,
    };
    dispatchTodos(action);
  };

  const handleRemoveTodo = (id) => {
    // console.log(id);
    const action = {
      type: "[Todo] Remove Todo",
      payload: id,
    };
    dispatchTodos(action);
  };

  const handleToggleTodo = (id) => {
    // console.log(id);
    const action = {
      type: "[Todo] Toggle Todo",
      payload: id,
    };
    dispatchTodos(action);
  };

  const totalTodos = () => {
    return todoState.length;
  };

  const totalTodosPending = () => {
    return todoState.filter((todo) => !todo.done).length;
  };

  const totalTodosDone = () => {
    return todoState.filter((todo) => todo.done).length;
  };

  return {
    todoState,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    totalTodos: totalTodos(),
    totalTodosPending: totalTodosPending(),
    totalTodosDone: totalTodosDone(),
  };
};

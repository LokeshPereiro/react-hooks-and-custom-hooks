import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   desc: "Tarea 1",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 2,
  //   desc: "Tarea 2",
  //   done: false,
  // },
  //  Vamos guardar los datos en el localStorage
];

const init = () => {
  return JSON.parse(localStorage.getItem("todoApp")) || [];
};

export const useTodos = () => {
  //   const [state, dispatch] = useReducer(reducerX, initialState);
  const [todoState, dispatchTodo] = useReducer(todoReducer, initialState, init);
  //   console.log(todoState);

  useEffect(() => {
    // Nuestro estado depende de los todos que recibe por lo que el useEffect es perfecto para traer los datos del localStorage. Es decir, nuestro componente primero se monda con lo los datos que ya tiene y re renderiza de nuevo con los cambios del estado
    // El setItem necesita dos args, 'un nombre', y los datos que queremos guradar
    // JSON.stringify es necesario ya que el localStorage solo guarda strings, de no hacerlo nos daría un [object Object]
    localStorage.setItem("todoApp", JSON.stringify(todoState) || []);
  }, [todoState]);

  const handleNewTodo = (onNewTarea) => {
    // console.log({ onNewTarea });
    const action = {
      type: "[Todo] Add Todo",
      payload: onNewTarea,
    };
    dispatchTodo(action);
  };

  const handleRemoveTodo = (id) => {
    // console.log(id);
    const action = {
      type: "[Todo] Remove Todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    // console.log(id);
    const action = {
      type: "[Todo] Toggle Todo",
      payload: id,
    };
    dispatchTodo(action);
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

import { useTodos } from "../hooks";
import { AddTarea } from "./AddTarea";
import { ListaTareas } from "./ListaTareas";

export const TareaApp = () => {
  const {
    todoState,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    totalTodos,
    totalTodosPending,
    totalTodosDone,
  } = useTodos();

  return (
    <div>
      <h1 className="text-center">TODOApp</h1>
      <hr />
      <div>
        <h5 className="text-center">TotalTodos: {totalTodos}</h5>
        <div className="d-flex justify-content-between bg-light p-3 mb-3">
          <small className="text-success">
            Done: <span>{totalTodosDone}</span>
          </small>

          <small className="text-warning">Pending: {totalTodosPending}</small>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          {todoState.map((todo) => {
            return (
              <ListaTareas
                key={todo.id}
                todo={todo}
                onRemoveTodo={handleRemoveTodo}
                onToggleTodo={handleToggleTodo}
              />
            );
          })}
        </div>

        {/* ----------------------------------------------------------------------- */}

        <div className="col-5">
          <h4>Añadir Todo</h4>
          <hr />
          {/* TodoAdd */}
          <AddTarea onAddNewTarea={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};

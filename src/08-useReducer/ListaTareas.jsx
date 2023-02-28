import { ItemTareas } from "./ItemTareas";

export const ListaTareas = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        <ItemTareas
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      </ul>
    </>
  );
};

import React from "react";
import { useForm } from "../hooks/useForm";

export const AddTarea = ({ onAddNewTarea }) => {
  const { desc, onInputChange, onResetForm } = useForm({
    desc: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (desc.length <= 1) return;
    const newTarea = {
      id: new Date().getTime() * 2,
      done: false,
      desc,
    };
    //Una manera de caidar que nos envien un obj
    //Es decir, si no hay propiedad la siguiente línea de código no se ejecuta
    onAddNewTarea && onAddNewTarea(newTarea);
    onResetForm("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qué necesitas hacer?"
          className="form-control"
          name="desc"
          value={desc}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};

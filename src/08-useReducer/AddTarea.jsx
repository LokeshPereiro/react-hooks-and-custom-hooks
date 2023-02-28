import React from "react";
import { useForm } from "../hooks/useForm";

export const AddTarea = ({ onAddNewTarea }) => {
  const { desc, formState, onInputChange, onResetForm } = useForm({
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
    onResetForm("");
    onAddNewTarea(newTarea);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What you want to do next?"
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

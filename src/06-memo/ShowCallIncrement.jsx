import { memo } from "react";

export const ShowCallIncrement = memo(({ increment }) => {
  console.log("Se ejecutó de nuevo..");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increase
    </button>
  );
});

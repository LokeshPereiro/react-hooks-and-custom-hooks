import { memo } from "react";

export const Small = memo(({ valueCounter }) => {
  console.log("Rerenderización de Nuevo :(");
  return (
    <>
      <small>{valueCounter}</small>
    </>
  );
});

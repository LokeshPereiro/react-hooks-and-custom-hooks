import { memo } from "react";

// este hook, que no es hook, va a memorizar este componente, es decir, solo va a tener en cuenta los cambios en counter

// Nuestro show/hide boton tiene su estado pues, memo no lo va a tener en cuenta sus cambios de estado
export const Small = memo(({ valueCounter }) => {
  console.log("Rerenderizacion de nuevo :(");
  return (
    <>
      <small>{valueCounter}</small>
    </>
  );
});

import { Hijo } from "./Hijo";
import { useCallback, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // Esto es lo que memorizo en el padre..
  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };

  const incrementarPa = useCallback((argVal) => {
    setValor((valValor) => valValor + argVal);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementarPa} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};

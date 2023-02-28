import { useState, useCallback, useEffect } from "react";
import { ShowCallIncrement } from "./ShowCallIncrement";

// #useCallback me sirve para memoriazar funciones
export const Callback = () => {
  const [counter, setCounter] = useState(10);

  const increaseFather = useCallback((argVal) => {
    // console.log(`setCounter(counter + 1)`);
    // Dentro del setCounter(), podemos declarar un callbak que tiene en cuenta el valor actual del counter + el valor que le llega
    setCounter((counterVal) => counterVal + argVal);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowCallIncrement increment={increaseFather} />
    </>
  );
};

import { useState } from "react";

//  ## El useState() no siempre va a tener los valores/datos primitivos (numeros, string. boolean, null, undefined, symbols..) -> tambien puede tener objs, arreglos..

export function CounterApp() {
  // Antes
  //   const [{ counter1, counter2, counter3 }, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //     counter3: 30,
  //   });

  // Despues

  const [stateCounterObj, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  // Destructuring del estado inicial
  const { counter1, counter2, counter3 } = stateCounterObj;

  return (
    <div>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />

      {/* {
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCounter({
              counter1: counter1 + 1,
              counter2,
              counter3,
            });
          }}
        >
          +1
        </button>
      } */}

      <button
        className="btn btn-secondary"
        onClick={() => {
          setCounter({
            ...stateCounterObj,
            counter1: counter1 + 1,
            // counter2: counter2 + 1,
            // counter3: counter3 + 1,
          });
        }}
      >
        +1
      </button>
    </div>
  );
}

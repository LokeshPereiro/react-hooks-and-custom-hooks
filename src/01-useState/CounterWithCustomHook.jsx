import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHook: {counter} </h1>
      <hr />
      {/* Ojo, al recibir una funcion que recibe argumento,no podemos pasarlo como referencia, eso nos daría [Object Object] es decir, seria => obj.toString(*/}
      <button onClick={() => increment(2)} className="btn btn-success">
        +1
      </button>
      <button onClick={reset} className="btn btn-secondary">
        Reset
      </button>
      <button onClick={() => decrement()} className="btn btn-danger">
        -1
      </button>
    </>
  );
};

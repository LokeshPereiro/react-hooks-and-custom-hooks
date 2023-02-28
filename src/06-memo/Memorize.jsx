import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small valueCounter={counter} />
      </h1>
      <button className="btn btn-outline-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-warning"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

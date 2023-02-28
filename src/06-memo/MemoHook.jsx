import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterar = 10) => {
  for (let i = 0; i < iterar; i++) {
    console.log("Ahí van las iteraciones");
  }
  return `${iterar} veces iterado..`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(400);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => {
    heavyStuff(counter);
  }, [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>{" "}
      </h1>
      {/* <p>{JSON.stringify(heavyStuff(1000))}</p> */}
      {/* Solo el counter memorizado el log de rreturn no! */}
      <p>{memorizedValue}</p>
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

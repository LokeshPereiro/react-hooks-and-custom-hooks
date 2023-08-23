import { useState } from "react";

// Se supone que el initial value lo recibo a través de argumento
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  // El valor por defecto es 1 pero ahora si queremos aumentar o disminuir la cantidad x, lo podríasmos hacer. Como argumento
  const increment = (defalutValue = 1) => {
    setCounter(counter + defalutValue);
  };

  const decrement = (defalutValue = 1) => {
    if (counter === 0) return;
    setCounter(counter - defalutValue);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

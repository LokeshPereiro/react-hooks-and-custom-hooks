import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, QuoteApi } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://dummyjson.com/quotes/${counter}`
  );
  // console.log(data, isLoading, hasError);

  // A veces, nos trae la data en un arreglo, en tal caso,  !!Si la data tiene valor  tomamos la posicion 0
  // const { quote, author } = !!data && data[0];
  // console.log(quote, author);

  return (
    <>
      <h3 className="text-center mb-3">Breaking Bad Quotes!</h3>

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <QuoteApi quote={data?.quote} author={data?.author} />
      )}
      <button
        onClick={() => decrement()}
        className="btn btn-secondary"
        disabled={counter === 1 && "disabled"}
      >
        Previous Quote
      </button>

      <button
        onClick={() => increment()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};

import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, QuoteApi } from "../03-hooksConx";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { state, data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //   console.log({ data, isLoading, hasError });
  //   !!Si la data tiene valor entonces toma la posicion 0
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h3 className="text-center mb-3">Breaking Bad Quotes!</h3>

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <QuoteApi quote={quote} author={author} />
      )}

      {/* Necesitamos escribir de nuevo el callback function ya que en useCounter el método de referencia retornaba un evento y no un numero (que por defecto ya era 1 su valor inicial)*/}
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

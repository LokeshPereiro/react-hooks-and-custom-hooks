import { useLayoutEffect, useRef, useState } from "react";

export const QuoteApi = ({ quote, author }) => {
  const pTagRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // El mismo código funcionaría igual con el useEffect()
  useLayoutEffect(() => {
    // console.log(pTagRef.current.getBoundingClientRect());
    const { width, height } = pTagRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote
        className="blockquote card text-end p-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          ref={pTagRef}
          className="mb-3"
          style={{ fontSize: "2rem", color: "Purple", fontWeight: "bold" }}
        >
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize, null, 3)}</code>
    </>
  );
};

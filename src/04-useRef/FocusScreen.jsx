import { useRef } from "react";

export const FocusScreen = () => {
  // const jsClick = () => {
  //   // document.querySelector("input").focus();
  //   document.querySelector("input").select();
  // };

  // const ref = useRef();
  // --> current
  // console.log(ref);

  const textRef = useRef();

  const emailRef = useRef();

  const onClickFocus = () => {
    // document.querySelector("input").select();
    textRef.current.select();
    // console.log(textRef);
    //habiendo dos referencias solo me seleciona el último...
    emailRef.current.select();
  };

  return (
    <div>
      <h2>Focus Screen Input Fields!</h2>
      <input
        ref={textRef}
        type="text"
        className="form-control mb-2"
        placeholder="Escribe tu nombre"
      />

      <input
        ref={emailRef}
        type="email"
        className="form-control mb-2"
        placeholder="correo@correo.com"
      />

      <button onClick={onClickFocus} className="btn btn-primary">
        Set Focus
      </button>
    </div>
  );
};

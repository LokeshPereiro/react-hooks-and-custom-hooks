import { useRef } from "react";

export const FocusScreen = () => {
  // const ref = useRef();
  // console.log(ref); --> current

  const textRef = useRef();

  /* ¿¿ Por que no puedo selecionar multiples inputs ?? */

  const emailRef = useRef();

  const onClickFocus = () => {
    // document.querySelector("input").select();
    textRef.current.select();
    // console.log(textRef);
    emailRef.current.select();
  };

  return (
    <div>
      <h2>Focus Screen!</h2>
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

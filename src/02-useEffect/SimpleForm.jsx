import { useState, useEffect } from "react";
import { Message } from "./Message";

export function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "Chanchito",
    email: "chanchito@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // setFormState(evt.target.value);
    const { name, value } = target;
    // console.log({ name, value });
    setFormState({
      ...formState,
      //   El atributo 'name' me sirve para saber qué input sufre cambios o a que input targetamos
      [name]: value,
    });
  };

  /*
- Sin dependencia, se ejecuta tantas veces como los cambios haya en el Componente 

- [], solo se ejecuta una vez, es decir, cundo el componente se renderiza por primera vez

- 
*/
  // Se recomienda que este hook solo se ocupe de algun efecto en específico y no multiples efectos
  //   useEffect(() => {
  //     console.log("Hola Hola");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Se cambio algun input del form!");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("Se cambio el email!");
  //   }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          className="form-control mt-2"
          type="email"
          placeholder="username@hotmail.com"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </form>

      {/* El elemento deja de existir fisicamente, a diferencia de los hidden que aunque no se vea siguen existiendo en la memoria */}
      {username === "Chanchito" && <Message />}
    </>
  );
}

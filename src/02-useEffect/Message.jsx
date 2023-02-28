import { useEffect, useState } from "react";

export function Message() {
  const [coor, setCoor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Cuando el componente se crea
    console.log("Ya existe");
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      // console.log(coords);
      setCoor({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("No existe..");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Usuario ya existe!</h3>
      {JSON.stringify(coor)}
    </div>
  );
}

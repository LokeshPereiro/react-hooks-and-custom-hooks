import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 8373,
//   name: "Lokesh Pereiro",
//   email: "lok@lok.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: new Date().getTime(),
    name: "Juan Jose",
    email: "juanjose@gmail.com",
    age: 26,
  });

  return (
    // Por lo general en el value enviamos un objeto de datos a los hijos pero se puede enviar cualquier cosa
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

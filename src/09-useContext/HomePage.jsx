import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h3>
        {/* Si existe y/o definido el name en el user obj */}
        <small>{user?.name}</small>
      </h3>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

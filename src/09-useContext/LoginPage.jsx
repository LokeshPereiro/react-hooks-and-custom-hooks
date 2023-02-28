import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const [showHide, setShowHide] = useState(false);

  return (
    <>
      <h6>LoginPage</h6>
      {showHide ? <pre>{JSON.stringify(user, null, 3)}</pre> : null}

      <button
        className="btn btn-outline-primary"
        // onClick={() => {
        //   setUser({ id: 46464, name: "Juan Jose", email: "jose@jose.com" });
        // }}
        onClick={() => setShowHide(!showHide)}
      >
        Show/Hide Info
      </button>
    </>
  );
};

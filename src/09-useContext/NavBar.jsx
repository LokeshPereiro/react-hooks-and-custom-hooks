import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* NavLink es casi lo mismo que el Link pero a diferencia del Link me permite navegar entre 'links' y sacar sus propiedades. Ello me permitirá modificarla */}

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/error"
              >
                Error
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

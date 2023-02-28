import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, NavBar, LoginPage, AboutPage, ErrorPage } from ".";
import { UserProvider } from "./context/UserProvider";

export const ContextApp = () => {
  return (
    <UserProvider>
      {/* Navbar va a aparecer en todas las páginas */}
      <NavBar />
      <hr />
      {/* A partir de aqui vamos a tener páginas individuales */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/error" element={<ErrorPage />} />

        {/* Si el usuario introduce un link erroneo, entonces, le pasamos al componente Error y de ahi que vuelva al home page */}

        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </UserProvider>
  );
};

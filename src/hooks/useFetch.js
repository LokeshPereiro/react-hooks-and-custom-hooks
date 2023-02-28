import { useEffect, useState } from "react";

// Creamos nuestro hook para hacer las peticiones (donde el argumento va a ser la url)
export const useFetch = (url) => {
  // Estado inicial de la respuesta

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetchData = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    // Ahora que tenemos la respuesta..
    setState({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetchData();
  }, [url]);

  // Hacemos el return del estado actual para que otros componentes puedan usarlo
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

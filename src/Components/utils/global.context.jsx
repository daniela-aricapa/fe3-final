// global.context.js (Contexto global)
import React, { createContext, useMemo, useState } from "react";

// Define el estado inicial del contexto
const initialState = { theme: "light", data: [] };

// Crea el contexto
export const GlobalContext = createContext(initialState);

// Proveedor del contexto
export const GlobalContextProvider = ({ children }) => {
  // Utiliza useState para gestionar el estado
  const [globalState, setGlobalState] = useState(initialState);

  // Implementa lógica personalizada si es necesario, por ejemplo, funciones para actualizar el estado

  const updateTheme = (newTheme) => {
    setGlobalState((prevState) => ({
      ...prevState,
      theme: newTheme,
    }));
  };

  // Define los valores que deseas proporcionar en el contexto aquí
  const contextValue = useMemo(() => {
    return {
      state: globalState,
      updateTheme, // Agrega aquí otras funciones o estados según tus necesidades
    };
  }, [globalState]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

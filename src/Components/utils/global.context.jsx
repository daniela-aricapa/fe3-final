
import React, { createContext, useMemo, useState } from "react";


const initialState = { theme: "light", data: [] };


export const GlobalContext = createContext(initialState);


export const GlobalContextProvider = ({ children }) => {
  
  const [globalState, setGlobalState] = useState(initialState);


  const updateTheme = (newTheme) => {
    setGlobalState((prevState) => ({
      ...prevState,
      theme: newTheme,
    }));
  };

  
  const contextValue = useMemo(() => {
    return {
      state: globalState,
      updateTheme, 
    };
  }, [globalState]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

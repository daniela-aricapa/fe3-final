import React, { createContext, useState, useContext, useEffect } from 'react';


const ThemeContext = createContext();


const themes = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: '#12121296',
    color: 'white',
  },
};


const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === themes.dark);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };


import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear un contexto para el tema
const ThemeContext = createContext();

// Define los temas
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

// Proveedor del contexto
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  // Aplicar la clase CSS 'dark' al body en función del tema actual
  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === themes.dark);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };


import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme'; // Importa el hook useTheme

const Navbar = () => {
  // Utiliza el hook useTheme para acceder al contexto del tema
  const { currentTheme, toggleTheme } = useTheme();

  const navbarStyle = {
    width: '92.5%', // Establece el ancho del navbar al 90%
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: currentTheme.background,
    color: currentTheme.color,
  };

  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const liStyle = {
    marginRight: '20px',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/home">Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li style={liStyle}>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;



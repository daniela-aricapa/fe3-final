
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ dentist, addToFavorites, removeFromFavorites, isFavorite }) => {
  const location = useLocation();

  return (
    <div className="card">
      <h2>{dentist.name}</h2>
      <p>Username: {dentist.username}</p>
      {!location.pathname.includes('/favs') && (
        <button onClick={() => addToFavorites(dentist)}>Favorito</button>
      )}
      {location.pathname.includes('/favs') && (
        <button onClick={() => removeFromFavorites(dentist.id)}>Eliminar</button>
      )}
      <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Card;

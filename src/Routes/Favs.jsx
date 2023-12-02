// Página Favs
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Recupera la lista de dentistas favoritos del Local Storage al cargar la página
    const storedFavoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    setFavoriteDentists(storedFavoriteDentists);
  }, []);

  const removeFromFavorites = (dentistId) => {
    // Actualiza la lista de favoritos en el estado eliminando el dentista por su ID
    const updatedFavorites = favoriteDentists.filter((dentist) => dentist.id !== dentistId);
    setFavoriteDentists(updatedFavorites);

    // Guarda la lista actualizada de dentistas favoritos en el Local Storage
    localStorage.setItem('favoriteDentists', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      {favoriteDentists.length > 0 ? (
        <div className="card-grid">
          {favoriteDentists.map((dentist) => (
            <Card
              key={dentist.id}
              dentist={dentist}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <p className="centered-paragraph">No tienes dentistas favoritos.</p>
      )}
    </>
  );
};

export default Favs;

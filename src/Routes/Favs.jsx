
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    
    const storedFavoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    setFavoriteDentists(storedFavoriteDentists);
  }, []);

  const removeFromFavorites = (dentistId) => {
   
    const updatedFavorites = favoriteDentists.filter((dentist) => dentist.id !== dentistId);
    setFavoriteDentists(updatedFavorites);

    
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

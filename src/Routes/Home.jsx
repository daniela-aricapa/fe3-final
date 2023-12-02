// Página Home
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde una API (reemplaza con tu fuente de datos real)
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error al obtener datos de los dentistas', error);
      }
    };

    fetchData();
    
    // Recupera la lista de dentistas favoritos del Local Storage
    const storedFavoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    setFavoriteDentists(storedFavoriteDentists);
  }, []);

  const addToFavorites = (dentist) => {
    // Actualiza la lista de favoritos en el estado
    setFavoriteDentists((prevFavorites) => [...prevFavorites, dentist]);

    // Guarda la lista actualizada de dentistas favoritos en el Local Storage
    localStorage.setItem('favoriteDentists', JSON.stringify([...favoriteDentists, dentist]));
  };

  return (
    <main className="light">
      <h1>Home</h1>
      <h2>Dentistas destacados</h2>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addToFavorites={() => addToFavorites(dentist)} />
        ))}
      </div>
    </main>
  );
};

export default Home;





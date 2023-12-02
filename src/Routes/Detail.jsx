
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams(); 

  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setDentist(response.data))
      .catch((error) => console.error('Error al obtener datos del dentista', error));
  }, [id]);

  return (
    <div className="detail">
      {dentist ? (
        <>
          <h1>Detalle del Dentista</h1>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio Web: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;

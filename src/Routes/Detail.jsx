/***import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico }
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico }
    </>
  )
}

export default Detail*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams(); // Obtén el ID de los parámetros de la URL

  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza una solicitud para obtener la información del dentista por su ID
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

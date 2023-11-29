import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Componente() {
  const [detalles, setDetalles] = useState([]);

  

  useEffect(() => {
    // Realizar la solicitud GET al backend
    Axios.get('http://127.0.0.1:3131/obtenerSolicitante')
      .then(response => {
        setDetalles(response.data);
      })
      .catch(error => {
        console.error('Error al obtener detalles:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {detalles.map((detalle, index) => (
          <li key={index}>
            OC: {detalle.id} - Solicitante: {detalle.solicitante}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Componente;

import React, { useState, useEffect } from 'react';
import './clientes.css';


function Clientes() {
  const [clientes, setClientes] = useState([]);

  async function fetchData() {
    const respuesta= await fetch(
      'http://localhost:8000/api/clientes',
      {
        method: 'GET',
      }
    );
    setClientes( await respuesta.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  const datosClientes= clientes.map(cliente =>{
    return (
      <li key={cliente.id}>
        {cliente.nombre}
      </li>
    )
  });
  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {datosClientes}
      </ul>
    </div>
  );
}

export default Clientes;

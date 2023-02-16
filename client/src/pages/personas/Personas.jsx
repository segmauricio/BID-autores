import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people`);
      setPersonas(respuesta.data);
    }

    getData();
  
  }, []);
  
  const quitarPersona = (personaID) => {
    setPersonas(personas.filter((persona) => persona._id !== personaID));
  }


  return (
    <>
      <h1>Listado de Personas</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>Nombre</th>
            <th style={{textAlign:"center"}}>Apellido</th>
            <th style={{textAlign:"center"}}>Edad</th>
            <th style={{textAlign:"center"}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { personas.map( (persona, index) => <tr key={index} >
            <td>{ persona.nombre }</td>
            <td>{ persona.apellido }</td>
            <td>{ persona.edad }</td>
            <td style={{textAlign:"center"}}>
              <Link className="btn btn-primary" to={`/personas/${persona._id}`}>Detalle</Link>   
              <Link className="btn btn-success ms-2" to={`/personas/${persona._id}/editar`}>Editar</Link>   
              <DeleteButton id_persona={persona._id} successCallback={quitarPersona} />
            </td>
          </tr> ) }
        </tbody>
      </table>
      <Link to="/personas/agregar" className="btn btn-primary">Agregar Persona</Link>
    </>
  )
}

export default Personas
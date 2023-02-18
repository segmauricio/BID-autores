import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Autores = () => {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autores`);
      setAutores(respuesta.data);
    }
    getData();
  }, []);
  
  const quitarAutor = (autorID) => {
    setAutores(autores.filter((autor) => autor._id !== autorID));
  }

  const sortedAutoresAlphabetically = autores.sort((a, z) => a.nombre.localeCompare(z.nombre))

  return (
    <>
    <Link to="/autores/agregar" className="btn btn-primary mb-3">Add an author</Link>
    <h4 style={{color: "rebeccapurple"}} className="mb-3">We have quotes by: </h4>
      <table className="table table-striped table-hover table-bordered col-md-3 col-sm-1 col-lg-4">
        <thead >
          <tr>
            <th className="text-center">Author</th>
            <th className="text-center">Quote</th>
            <th className="text-center">Actions available</th>
          </tr>
        </thead>
        <tbody>
          { sortedAutoresAlphabetically.map( (autor, index) => <tr key={index} >
            <td style={{color: "rebeccapurple"}} className="col-3 px-4">{ autor.nombre }</td>
            <td className="px-4">{ autor.cita }</td>
            <td className="col-2 text-center"> 
              <Link className="btn btn-success ms-2" to={`/autores/${autor._id}/editar`}>Editar</Link>   
              <DeleteButton id_autor={autor._id} successCallback={quitarAutor} />
            </td>
          </tr> ) }
        </tbody>
      </table>
    </>
  )
}

export default Autores
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {

    const error  = useRouteError();

  return (
    <div className="container mt-5">
        <h1>Página no Encontrada</h1>
        <h6 className='mt-3 mb-3'>Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?</h6>
        <Link to="/autores/agregar" className="btn btn-primary mb-3">Add an author</Link>
        <hr />
        <div className="alert alert-danger">{error.statusText || error.message}</div>
    </div>
  )
}

export default NotFound
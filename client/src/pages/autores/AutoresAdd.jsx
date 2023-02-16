import React from 'react'
import AutorForm from '../../components/AutorForm'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

const AutoresAdd = () => {
  const navigate = useNavigate('/autores');
  const initialValues = {
    nombre: '',
    cita: ''
  }

  const crearAutor = async(values, actions) => {
    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/autores`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'ÉXITO',
                text: `Se ha agregado a ${respuesta.data.nombre} a la biblioteca`,
            });
            actions.resetForm(initialValues);
            navigate('/autores');
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  return (
    <>
        <Link to="/autores" className="btn btn-primary mb-3">Home</Link>
        <h4 style={{color: "rebeccapurple"}} className="mb-3">Add a new author: </h4>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6 border border-secondary px-3 py-3">
                <AutorForm 
                  initialValues={initialValues}
                  botonTexto="Submit"
                  onSubmit={crearAutor}
                />
            </div>
        </div>
    </>
  )
}

export default AutoresAdd
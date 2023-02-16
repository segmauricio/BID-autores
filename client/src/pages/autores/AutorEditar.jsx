import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AutorForm from '../../components/AutorForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const AutorEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: '',
        cita: ''
      }

    const { id } = useParams()
    const [autor, setAutor] = useState(initialValues)

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autores/${id}`);
            setAutor(respuesta.data);
        }
        getData();
    }, [id])

    const actualizarAutor = async(values, actions) => {
        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/autores/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'ÉXITO',
                    text: `Se han actualizado los datos de ${respuesta.data.nombre} `,
                });

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
            <h4 style={{color: "rebeccapurple"}} className="mb-3">Edit this author</h4>
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6 border border-secondary px-3 py-3">
                    <AutorForm 
                        initialValues={autor}
                        botonTexto="Submit"
                        onSubmit={actualizarAutor}
                    />
                </div>
            </div>
        </>
    )
}

export default AutorEditar
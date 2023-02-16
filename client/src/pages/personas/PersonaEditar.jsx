import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PersonaForm from '../../components/PersonaForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const PersonaEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: '',
        apellido: '',
        edad: 18
      }

    const { id } = useParams()
    const [persona, setPersona] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people/${id}`);
            setPersona(respuesta.data);
        }

        getData();

    }, [id])

    const actualizarPersona = async(values, actions) => {

        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/people/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
                });

                navigate('/personas');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
      }

    return (
        <>
            <h1>Editar Persona</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <PersonaForm 
                        initialValues={persona}
                        botonTexto="Actualizar"
                        onSubmit={actualizarPersona}
                    />
                </div>
            </div>
        </>
    )
}

export default PersonaEditar
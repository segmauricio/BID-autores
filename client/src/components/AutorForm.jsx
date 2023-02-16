import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const AutoresErrores = Yup.object().shape({
    nombre: Yup.string()
        .required('Requerido')
        .min(5, 'El nombre debe tener como minimo 3 caracteres')
        .max(70, 'No puede ser muy largo el nombre.'),
    cita: Yup.string()
        .required('La cita es requerida.')
        .min(10, 'Se necesita como minimo 3 caracteres.')
        .max(100, 'No debe ser tan largo'),
});

const AutorForm = ({initialValues, botonTexto, onSubmit}) => {
  return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={AutoresErrores}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="nombre" className="form-control" placeholder="Nombre del autor" />
                {touched.nombre && errors.nombre && <div className="ms-3 mt-1 text-danger">{errors.nombre}</div>}
                <Field name="cita" className="form-control mt-2" placeholder="Cita famosa del autor"/>
                {touched.cita && errors.cita && <div className="ms-3 mt-1 text-danger">{errors.cita}</div>}
                <Link className="btn btn-success mt-5" to={"/autores"} style={{marginRight:"5px"}}>Cancel</Link>
                <button className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{botonTexto}</button>
            </Form>
        )}
    </Formik>
  )
}

export default AutorForm
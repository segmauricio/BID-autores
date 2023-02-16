import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const PersonasErrores = Yup.object().shape({
    nombre: Yup.string()
        .min(5, 'El nombre debe tener como minimo 5 caracteres')
        .max(70, 'No puede ser muy largo el nombre.')
        .required('Requerido'),
    apellido: Yup.string()
        .required('El apellido es requerido.')
        .min(10, 'Se necesita como minumo 10 caracteres.')
        .max(100, 'no puede superar los 100 caracteres'),
    edad: Yup.number()
        .integer('Debe ser numero entero')
        .required('Se necesita la edad si o si.')
        .positive('No puede ser negativo'),
});

const PersonaForm = ({initialValues, botonTexto, onSubmit}) => {

  return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={PersonasErrores}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="nombre" className="form-control" placeholder="Nombre" />
                {touched.nombre && errors.nombre && <div className="ms-3 mt-1 text-danger">{errors.nombre}</div>}
                <Field name="apellido" className="form-control mt-2" placeholder="Apellido"/>
                {touched.apellido && errors.apellido && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                <Field name="edad" type="number" className="form-control mt-2" placeholder="Edad" />
                {touched.edad && errors.edad && <div className="ms-3 mt-1 text-danger">{errors.edad}</div>}
                <button className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{botonTexto} Persona</button>
            </Form>
        )}
    </Formik>
  )
}

export default PersonaForm
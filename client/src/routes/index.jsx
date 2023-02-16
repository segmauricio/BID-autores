import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PersonaDetalle from "../pages/personas/PersonaDetalle";
import PersonaEditar from "../pages/personas/PersonaEditar";
import Personas from "../pages/personas/Personas";
import PersonasAdd from "../pages/personas/PersonasAdd";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'personas',
                element: <Personas />
            },
            {
                path:'personas/agregar',
                element: <PersonasAdd />
            },
            {
                path:'personas/:id',
                element: <PersonaDetalle />
            },
            {
                path:'personas/:id/editar',
                element: <PersonaEditar />
            }
        ]
    }
]);
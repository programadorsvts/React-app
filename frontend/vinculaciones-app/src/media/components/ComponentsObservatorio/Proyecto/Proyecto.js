import Axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import "./proyecto.css"

function ProyectosPublicados () {

    const [proyectos, setProyectos] = useState([])
    const [areas, setAreas] = useState([])

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/proyects')
        .then(response => {
            setProyectos(response.data)
            Axios.get('http://127.0.0.1:8000/api/area')
            .then(response => {
                setAreas(response.data)
            })
            .catch(() => {

            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    return(
        <>
        <Container>
        <h1 className='encabezado-2 mb-5'>Proyectos Publicados</h1>
            <Container className="proyecto">
                {
                    proyectos.map((proyecto) => {
                        return(
                        <ProyectoCard proyecto={proyecto} ></ProyectoCard>
                    )
                    })
                }
            </Container>
        </Container>   
        </>
    );
}


 export default ProyectosPublicados
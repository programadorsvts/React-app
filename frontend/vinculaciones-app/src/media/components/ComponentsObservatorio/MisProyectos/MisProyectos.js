import Axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import "./proyecto.css"

function MisProyectos () {

    const [proyectos, setProyectos] = useState([])

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/user/proyects')
        .then(response => {
            console.log(response)
            setProyectos(response.data.proyects)
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
        <h1 className='encabezado-2 my-5'>Proyectos publicados por mi</h1>
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

 export default MisProyectos

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import {useProyectosContext} from '../../../../ProyectosProvider' 
import "./proyecto.css"

function MisProyectos () {

    const [proyectos, setProyectos] = useState(null)
    setProyectos(useProyectosContext())

    useEffect(() => {
           proyectos()
    }, [proyectos])

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
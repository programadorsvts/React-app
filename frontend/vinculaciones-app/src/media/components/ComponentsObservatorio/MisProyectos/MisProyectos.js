
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

import "./proyecto.css"

function MisProyectos () {

    const [proyectos, setProyectos] = useState()
 

    useEffect(() => {
       
    }, [])
    

    return(
        <>
        <Container>
            <h1 className='encabezado-2 my-5'>Proyectos publicados por mi</h1>
       
           <Container className="proyecto">
                {
                   /*   proyecto?.map((proyecto) => {
                            return(
                            <ProyectoCard proyecto={proyecto} ></ProyectoCard>
                        )
                        })  */
                }
            </Container> 
        </Container>   
        </>
    );
}

 export default MisProyectos

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {useProyectosContext} from '../../../../ProyectosProvider' 
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import '../Proyecto/proyecto.css'


function ProyectosPublicados () {

    const [proyecto, setProyecto] = useState(null)
   const  proyectos=useProyectosContext(null)
 
    useEffect(() => {
        setProyecto(proyectos)
    }, [proyectos])

    return(
        <>
            <Container>
                <h1 className='encabezado-2 mb-5'>Catalogo de Proyectos de Inovacion</h1>
                <Container className="proyecto">
                     {
                        proyecto?.map((proyecto) => {
                            return(
                                <ProyectoCard key={proyecto.data.id} proyecto={proyecto} ></ProyectoCard>
                            )
                        }) 
                        
                    }  
                </Container>
            </Container>   
        </>
    );
}

 export default ProyectosPublicados
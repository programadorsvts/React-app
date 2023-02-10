
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import '../Proyecto/proyecto.css'


function ProyectosPublicados () {


const [proyectos, setProyectos] = useState([])

    useEffect(()=>{
        
            Axios.get('http://127.0.0.1:8000/api/proyects?page=1&to=10').then((response)=>{
            console.log('Informacion es',response.data.data)
            setProyectos(response.data.data)
            console.log('informacion de proyectos,',proyectos)
            }) 
            .catch((error)=> {
                console.log(error.messages);
            })     
    },[])

    return(
        <>
            <Container>
                <h1 className='encabezado-2 mb-5'>Catalogo de Proyectos de Inovacion</h1>
                <Container className="proyecto">
                         {proyectos.map((proyectos) => {
                            return(<ProyectoCard key={proyectos.id} proyecto={proyectos} ></ProyectoCard>)
                        })}  
                </Container>
            </Container>   
        </>
    );
}

 export default ProyectosPublicados
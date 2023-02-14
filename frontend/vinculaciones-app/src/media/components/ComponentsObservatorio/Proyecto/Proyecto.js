
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import '../Proyecto/proyecto.css'


function ProyectosPublicados () {


const [proyectos, setProyectos] = useState([])
const [paginationData,setPaginationData]=useState([])
const [currentPage,setCurrentPage]=useState([]) 
const [postPerPage,setpostPerPage]=useState([])

    useEffect(()=>{
         const getData = async () =>{
                 await Axios.get('http://127.0.0.1:8000/api/proyects').then((response)=>{
                   /*  http://127.0.0.1:8000/api/proyects?page=1&to=10 */
                    setProyectos([...response.data.data])
                    setPaginationData([response.data])
                    
                }) 
                .catch((error)=> {
                    console.log(error.messages);
                })     
         }
    getData();      
    },[])
    
    console.log('Response---',paginationData)
    return(
        <>
            <Container>
                <h1 className='encabezado-2 mb-5'>Catalogo de Proyectos de Inovacion</h1>
                <Container className="proyecto">
                       
                         {proyectos.map((proyecto) => {
                           
                            return(<ProyectoCard key={proyecto.id} proyecto={proyecto} ></ProyectoCard>)
                        })}  
                </Container>
            </Container>   
        </>
    );
}

 export default ProyectosPublicados
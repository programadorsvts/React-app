
import {create} from 'apisauce';

import {Row,Container, Col} from 'react-bootstrap';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

function ProyectosPublicados(){

               /*  const api = create({ baseURL: 'https://api.github.com' })

                const [ proyectos, setProyectos]=useState=([]);

                useEffect( ()=> {
                        ObtenerProyectos();
                },[ ]);

                const ObtenerProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        // response.problem
                                    }
                                     console.log(response);    
                                })
                }

                const BuscarProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        // response.problem
                                    }
                                     console.log(response);    
                                })
                } */



    return(
        <>
        <Container class="proyectos">
                <h1 className='encabezado-2 text'>Proyectos Publicados</h1>
                <ProyectoCard></ProyectoCard>
                <ProyectoCard></ProyectoCard>
                <ProyectoCard></ProyectoCard>
                <ProyectoCard></ProyectoCard>
                <ProyectoCard></ProyectoCard>
                <ProyectoCard></ProyectoCard>
        </Container>   
        </>
    );
}


 export default ProyectosPublicados
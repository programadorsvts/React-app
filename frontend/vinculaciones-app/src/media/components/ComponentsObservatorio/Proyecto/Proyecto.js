import { useEffect,useState } from 'react';
import  axios  from 'axios';
import {create} from 'apisauce';

import {Row,Container, Col} from 'react-bootstrap';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

function ProyectosPublicados(){

                const api = create({ baseURL: 'https://api.github.com' })

                const [ proyectos, setProyectos]=useState=([]);

                useEffect( ()=> {
                        ObtenerProyectos();
                },[ ]);

                const ObtenerProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        response.problem
                                    }
                                     console.log(response);    
                                })
                }

                const BuscarProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        response.problem
                                    }
                                     console.log(response);    
                                })
                }



    return(
            <>
                    <Container>
                        <h1 className='encabezado-2 text'>Proyectos Publicados</h1>
                        <Row   className='mt-5 '>
                               
                            <Col className='mt-5 d-flex justify-content-center'>

                                    <ProyectoCard ></ProyectoCard>

                            </Col>
                           
                            <Col className='mt-5  d-flex justify-content-center'>

                                   <ProyectoCard ></ProyectoCard>

                            </Col>
                            
                            <Col className='mt-5  d-flex justify-content-center'>

                                    <ProyectoCard ></ProyectoCard>

                            </Col>
                        </Row>
                           <Row   className='mt-5 '>
                               
                            <Col className='mt-5 d-flex justify-content-center'>

                                    <ProyectoCard></ProyectoCard>

                            </Col>
                           
                            <Col className='mt-5  d-flex justify-content-center'>

                                   <ProyectoCard></ProyectoCard>

                            </Col>
                            
                            <Col className='mt-5  d-flex justify-content-center'>

                                    <ProyectoCard></ProyectoCard>

                            </Col>
                        </Row>
                    </Container>   
            </>
    );
}


 export default ProyectosPublicados
import {Row,Container, Col} from 'react-bootstrap';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

function proyectospublicados(){
    return(
            <>
                    <Container>
                        <h1 className='encabezado-2 text'>Proyectos Publicados</h1>
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


 export default proyectospublicados
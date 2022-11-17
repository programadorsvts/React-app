import {Row,Container, Col} from 'react-bootstrap';
import HerramientasCard from './HerramientasCard';

function herramienta(){
        
        
        return(
                <>
                        <Container fluid >
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Herramientas</h1>
                            <Row   className='mt-5'>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                     <HerramientasCard></HerramientasCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                    <HerramientasCard></HerramientasCard>

                                </Col>
                                
                                <Col className='mt-5  d-flex justify-content-center'>

                                      <HerramientasCard></HerramientasCard>

                                </Col>
                            </Row>
                          
                        </Container>   
                </>
        );
}

export default herramienta;

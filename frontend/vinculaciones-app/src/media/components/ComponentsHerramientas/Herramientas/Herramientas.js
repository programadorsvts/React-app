import {Row,Container, Col} from 'react-bootstrap';
import HerramientasCard from './HerramientasCard';

function herramienta(){

        const herramienta1={img:'assets/images/herramienta.png',titulo:'Herramienta 1', info:'informacion sobre la herramienta ' }
        const herramienta2={img:'assets/images/herramienta.png',titulo:'Herramienta 2', info:'informacion sobre la herramienta ' }
        const herramienta3={img:'assets/images/herramienta.png',titulo:'Herramienta 3', info:'informacion sobre la herramienta ' }
        
        
        return(
                <>
                        <Container fluid >
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Herramientas</h1>
                            <Row   className='mt-2'>
                                
                                <Col className=' d-flex justify-content-center'>

                                     <HerramientasCard data={herramienta1}></HerramientasCard>

                                </Col>
                            
                                <Col className=' d-flex justify-content-center'>

                                    <HerramientasCard data={herramienta2}></HerramientasCard>

                                </Col>
                                
                                <Col className='  d-flex justify-content-center'>

                                      <HerramientasCard data={herramienta3}></HerramientasCard>

                                </Col>
                            </Row>
                          
                        </Container>   
                </>
        );
}

export default herramienta;

import {Row,Container, Col} from 'react-bootstrap';
import HerramientasCard from './HerramientasCard';

function herramienta(){
        
        const herramienta1={imagen:'assets/images/Herramienta.png', titulo:'Herramienta 1', informacion:'La herramienta 1 se utiliza para obtener.... '  };
        const herramienta2={imagen:'assets/images/Herramienta.png', titulo:'Herramienta 2', informacion:'La herramienta 2 se utiliza para obtener.... '  };
        const herramienta3={imagen:'assets/images/Herramienta.png', titulo:'Herramienta 3', informacion:'La herramienta 3 se utiliza para obtener.... '  };
        
        return(
                <>
                        <Container fluid >
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Herramientas</h1>
                            <Row   className='mt-5'>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                     <HerramientasCard data={herramienta1}></HerramientasCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                    <HerramientasCard data={ herramienta2}></HerramientasCard>

                                </Col>
                                
                                <Col className='mt-5  d-flex justify-content-center'>

                                      <HerramientasCard data={ herramienta3} ></HerramientasCard>

                                </Col>
                            </Row>
                          
                        </Container>   
                </>
        );
}

export default herramienta;

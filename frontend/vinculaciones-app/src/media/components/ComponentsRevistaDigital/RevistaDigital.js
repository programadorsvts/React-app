import {Row,Container, Col} from 'react-bootstrap';
import RevistaCard from '../ComponentsRevistaDigital/RevistaCard';

function revista(){
        
        return(
                <>
                        <Container>
                            <h1 className='encabezado-2 text mt-5'>Revistas Digitales  Publicados</h1>
                            <Row   className='mt-5 '>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard></RevistaCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                    <RevistaCard></RevistaCard>

                                </Col>
                                
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard></RevistaCard>

                                </Col>
                            </Row>
                        </Container>   
                </>
        );
}


 export default revista;
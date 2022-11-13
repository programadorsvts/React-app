import { Col, Container, Row } from 'react-bootstrap';
import RestablecerFrom from './RestablecerForm';

function restablecer() {
  return (
            <>
                <Container>
                                 <Row>
                    
                                    <Col className="d-flex justify-content-center mb-5 mt-5">
                                            <img src="'../../image/Logo-Svts-blanco.svg" width="300" height="100" className="d-inline-block " alt=""/>
                                    </Col>
                    
                                </Row>
                </Container>
               
                <Container>   
                    <Row >
                                <Col className="  d-flex justify-content-center ">
                                    <RestablecerFrom></RestablecerFrom>
                                </Col>
                                
                    </Row>
                </Container>
            </>


  );
}

export default restablecer;
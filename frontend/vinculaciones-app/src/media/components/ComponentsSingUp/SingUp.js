import { Col, Container, Row } from 'react-bootstrap';
import SingUpCard from './SingUpCard';

function singup() {
  return (
            <>
                <Container>
                                 <Row>
                    
                                    <Col className="d-flex justify-content-center mb-5 mt-5">
                                            <img src="'../../image/Solo-LogoSVTS-Blanco.svg" width="300" height="100" className="d-inline-block " alt=""/>
                                    </Col>
                    
                                </Row>
                </Container>
               
                <Container>   
                    <Row >
                                <Col className="  d-flex justify-content-center ">
                                    <SingUpCard></SingUpCard>
                                </Col>
                                
                    </Row>
                </Container>
            </>


  );
}

export default singup;
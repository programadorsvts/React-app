import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';

function login() {
  return (
            <>
                <Container>
                                 <Row>
                    
                                    <Col className="d-flex justify-content-center mb-5 mt-5">
                                            <img src="/assets/svgs/Logo-Svts-blanco.svg" width="300" height="100" className="d-inline-block " alt=""/>
                                    </Col>
                    
                                </Row>
                </Container>
               
                <Container>   
                    <Row >
                                <Col className="  d-flex justify-content-center ">
                                    <LoginForm></LoginForm>
                                </Col>
                                
                    </Row>
                </Container>
            </>


  );
}

export default login;
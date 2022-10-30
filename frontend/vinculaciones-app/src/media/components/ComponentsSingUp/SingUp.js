import { Col, Container, Row } from 'react-bootstrap';
import SingUpForm from './SingUpForm';


function singup() {
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
                    <SingUpForm></SingUpForm>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default singup;
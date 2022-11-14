import {Col, Container,Row} from 'react-bootstrap'
import './principalobservatorio.css' ;

function principalobservatorio() {
  return (
    <Container fluid className="principal-body ">
            <Container>
                   <Row className=' d-flex justify-content-center' >
                      <Col >
                            <img src="/assets/svgs/Logo-ObservaSVTS-blanco.svg" width="300" height="400" className=" " alt=""/>
                      </Col>
                  </Row>
                  
                  <Row className='mt-4 d-flex justify-content-center'>
                      <Col className='m-4'>
                            <img src="/assets/svgs/Solo-LogoSVTS.svg" width="300" height="100" className="d-inline-block " alt=""/>
                      </Col>
                      <Col  className='m-4'>
                            <img src="/assets/svgs/Escudo-UNSL-Blanco.svg" width="300" height="100" className="d-inline-block " alt=""/>
                      </Col>           
                  </Row>
              </Container>

            <h1 className="hero mt-5 pt-5">Observatorio SVTS</h1>

    </Container>
  );
}
export default principalobservatorio;
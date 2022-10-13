import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'



function noticias() {
  return (


    <Container  className="ms-5 me-5 "  >
        <h4 className="mt-5 pt-5" xs lg="2">Noticias</h4>
        <Row className="justify-content-center">
    
            <Col className="mt-4"  lg="3">
                    
                    <Card></Card>
            
            </Col>
            <Col className="mt-4"   lg="3">
                    
                    <Card></Card>
            
            </Col>
            <Col className="mt-4 "  lg="3">
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;
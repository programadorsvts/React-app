import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'



function noticias() {
  return (


    <Container  className="ms-5 me-5  justify-content-center"  >
        <h4 className="mt-5 pt-5" xs lg="2">Noticias</h4>
        <Row className="">
    
            <Col className="mt-4 justify-content-end"  md="4">
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-4 justify-content-center"    md="4">
                    
                    <Card></Card>
            
            </Col>
            
            <Col className="mt-4 justify-content-start"  md="4">
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;
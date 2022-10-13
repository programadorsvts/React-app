import {Container,Row,Col} from 'react-bootstrap';

import Card from '../Noticias/Card'



function gestion() {
  return (


    <Container  className="ms-5 me-5 "  >
        
        <h2 className="mt-5 pt-5" xs lg="2">Gestion</h2>
       
        <Row className="  ">

            <Col className="mt-4"  md="4">
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-4"    md="4">
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-4 "  md="4">
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default gestion;
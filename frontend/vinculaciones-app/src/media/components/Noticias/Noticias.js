import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'



function noticias() {
  return (


    <Container  className=" "  >
        
        <h4 className="mt-5 pt-5" xs lg="2">Noticias</h4>
        
        <Row className=" bg-danger  justify-content-center ">
     
            <Col className=" mt-3" xs    >
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-3 "xs   >
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-3" xs    >
                    
                    <Card></Card>
            
            </Col>
             <Col className="mt-3" xs    >
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;
import {Container,Row,Col} from 'react-bootstrap';

import Card from '../Noticias/Card'



function convocatorias() {
  return (


    <Container  className=" "  >
        
        <h2 className="mt-5 pt-5  text-center" >Convocatorias</h2>
       
        <Row className=" bg-danger  justify-content-center"  >

            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <Card></Card>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default convocatorias;
import {Card, Col, Row}from 'react-bootstrap';
import Formulario from './Formulario';





function consultacard() {
  return (
    
    <Card style={{height : "655px", width: "544px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                        <Formulario></Formulario>
                    </Col>
                
            </Row>
        </Card.Body>
    </Card>
  );
}

export default consultacard;
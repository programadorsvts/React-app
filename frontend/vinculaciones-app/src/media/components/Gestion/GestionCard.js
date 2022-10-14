import {Card, Col, Row}from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function cardgestion() {
  return (
    
    <Card style={{height : "155px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                        <FontAwesomeIcon icon="fa-regular fa-users-gear" /> 
                    </Col>
                    

                    <Col>
                            <Card.Text className="mt-3">4 de Junio 2021: Día de la Vinculación Tecnológica</Card.Text>
                    </Col>

            </Row>
        </Card.Body>
    </Card>
  );
}

export default cardgestion;
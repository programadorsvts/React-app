import {Card, Col, Row}from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function convocatoriacard() {
  return (
    
    <Card style={{height : "421px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                        <FontAwesomeIcon icon="fa-regular fa-users-gear" /> 
                    </Col>
                
            </Row>
        </Card.Body>
    </Card>
  );
}

export default convocatoriacard;
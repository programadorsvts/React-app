import {Card, Col, Row}from 'react-bootstrap';
import Map from './Map';





function mapcard() {
  return (
    
    <Card style={{height : "655px", width: "544px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                            <Map ></Map >  
                    </Col>
                
            </Row>
        </Card.Body>
    </Card>
  );
}

export default mapcard;
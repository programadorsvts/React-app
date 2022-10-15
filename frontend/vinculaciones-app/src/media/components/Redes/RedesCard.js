import {Card, Col, Row}from 'react-bootstrap';






function redescard() {
  return (
    
    <Card style={{height : "130px", width: "356px"}}>
        
        <Card.Body  className=" d-flex justify-content-center text-secondary">
            <Row className="mt-4">
                    
                    <Col>
                          <p>icon</p>
                    </Col>
                  
            </Row>
        </Card.Body>
    </Card>
  );
}

export default redescard;
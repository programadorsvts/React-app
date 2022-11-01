import {Card, Col, Row}from 'react-bootstrap';






function redescard(props) {
  return (
    
    <Card style={{height : "130px", width: "356px"}}>
        
        <Card.Body  className=" d-flex justify-content-center text-secondary">
            <Row className="mt-4">
                    
                    <Col>
                          <Card.Img src={props.info.ruta} />
                    </Col>
                  
            </Row>
        </Card.Body>
    </Card>
  );
}

export default redescard;
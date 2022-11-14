import {Card, Col, Row}from 'react-bootstrap';






function redescard(props) {
  return (
    
    <Card style={{height : "130px", width: "356px"}}>
        
        <Card.Body  className=" d-flex justify-content-center text-secondary">
            <Row className="">
                    
                    <Col>
                          <Card.Img src={props.info.ruta} style={{height : "100px", width: "400px"}} />
                    </Col>
                  
            </Row>
        </Card.Body>
    </Card>
  );
}

export default redescard;
import {Card, Col, Row}from 'react-bootstrap';





function vinculacionescard(props) {
  return (
    
    <Card style={{height : "421px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                        <Card.Img src={props.info.ruta}  style={{height : "380px", width: "320px"}}/>
                    </Col>
                
            </Row>
        </Card.Body>
    </Card>
  );
}

export default vinculacionescard;
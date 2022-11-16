import {Card, Col, Row}from 'react-bootstrap';





function vinculacionescard(props) {
  return (
    
    <Card style={{height : "421px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                      <a href={props.data.link}  rel="noreferrer">
                          <Card.Img src={props.data.ruta}  style={{height : "380px", width: "320px"}}/>
                      </a>   
                    </Col>
                
            </Row>
        </Card.Body>
    </Card>
  );
}

export default vinculacionescard;